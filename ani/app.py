from flask import Flask, request, render_template
import torch
from PIL import Image
import io

app = Flask(__name__)
app.secret_key = 'supersecretkey'

# Load the YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

def count_animals(image):
    # Define animal classes
    animal_classes = {'cat', 'dog', 'bird', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe'}
    
    # Perform object detection
    results = model(image)
    
    # Parse the results
    detected_objects = results.pandas().xyxy[0]
    animal_count = 0
    
    for _, row in detected_objects.iterrows():
        if row['name'] in animal_classes:
            animal_count += 1
    
    return animal_count

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        files = request.files.getlist('file')  # Get list of files
        results = []
        
        for file in files:
            if file and file.filename.endswith(('.jpg', '.jpeg', '.png')):
                image = Image.open(file.stream)  # Open image directly from file stream
                animal_count = count_animals(image)
                # Save the file to a static directory to display later
                file_path = f'static/{file.filename}'
                image.save(file_path)
                results.append({'file_name': file.filename, 'animal_count': animal_count})
                
        return render_template('index.html', results=results)

    return render_template('index.html', results=None)

if __name__ == '__main__':
    app.run(debug=True)
