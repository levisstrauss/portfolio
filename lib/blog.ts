export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  author: {
    name: string
    avatar?: string
  }
  coverImage: string
  tags: string[]
  featured?: boolean
  relatedPosts?: string[] // Add this line
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "demystifying-transformer-architecture",
    title: "Demystifying Transformer Architecture for NLP Beginners",
    excerpt:
      "A comprehensive guide to understanding transformer architecture and its applications in natural language processing for beginners.",
    content: `
# Demystifying Transformer Architecture for NLP Beginners

The transformer architecture has revolutionized natural language processing since its introduction in the paper "Attention Is All You Need" by Vaswani et al. in 2017. This architecture has become the foundation for state-of-the-art models like BERT, GPT, and T5.

## What is a Transformer?

At its core, the transformer is a neural network architecture designed to handle sequential data, particularly text. Unlike its predecessors (RNNs and LSTMs), transformers process entire sequences simultaneously rather than one element at a time, making them highly parallelizable and efficient.

![Transformer Architecture](/transformer-network-diagram.png)

## Key Components

### 1. Self-Attention Mechanism

The self-attention mechanism is the heart of the transformer architecture. It allows the model to weigh the importance of different words in a sentence when processing a specific word. This is crucial for understanding context and resolving ambiguities.

\`\`\`python
def self_attention(query, key, value):
    # Scaled dot-product attention
    scores = torch.matmul(query, key.transpose(-2, -1)) / math.sqrt(d_k)
    attention_weights = F.softmax(scores, dim=-1)
    return torch.matmul(attention_weights, value), attention_weights
\`\`\`

### 2. Multi-Head Attention

Multi-head attention extends self-attention by running multiple attention operations in parallel. This allows the model to focus on different aspects of the input simultaneously.

### 3. Position-wise Feed-Forward Networks

After the attention layer, each position goes through a feed-forward network independently. This consists of two linear transformations with a ReLU activation in between.

### 4. Positional Encoding

Since transformers process all words simultaneously, they need a way to understand word order. Positional encodings add information about the position of each word in the sequence.

## Transformer Architecture

The complete transformer architecture consists of an encoder and a decoder, each containing multiple layers of self-attention and feed-forward networks.

### Encoder

The encoder processes the input sequence and generates representations that capture the meaning of each word in context.

### Decoder

The decoder generates the output sequence one token at a time, using both the encoder's output and its own previous outputs.

## Applications in NLP

Transformers have enabled significant advances in various NLP tasks:

1. **Machine Translation**: Models like T5 achieve state-of-the-art results in translating between languages.
2. **Text Summarization**: Transformers can generate concise summaries of long documents.
3. **Question Answering**: Models like BERT excel at understanding questions and finding answers in text.
4. **Text Generation**: GPT models can generate coherent and contextually relevant text.

## Implementing a Simple Transformer

Here's a simplified implementation of a transformer encoder layer using PyTorch:

\`\`\`python
import torch
import torch.nn as nn

class TransformerEncoderLayer(nn.Module):
    def __init__(self, d_model, nhead, dim_feedforward=2048, dropout=0.1):
        super().__init__()
        self.self_attn = nn.MultiheadAttention(d_model, nhead, dropout=dropout)
        self.linear1 = nn.Linear(d_model, dim_feedforward)
        self.dropout = nn.Dropout(dropout)
        self.linear2 = nn.Linear(dim_feedforward, d_model)
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout1 = nn.Dropout(dropout)
        self.dropout2 = nn.Dropout(dropout)
        self.activation = nn.ReLU()

    def forward(self, src, src_mask=None, src_key_padding_mask=None):
        src2 = self.norm1(src)
        src2, _ = self.self_attn(src2, src2, src2, attn_mask=src_mask,
                                key_padding_mask=src_key_padding_mask)
        src = src + self.dropout1(src2)
        src2 = self.norm2(src)
        src2 = self.linear2(self.dropout(self.activation(self.linear1(src2))))
        src = src + self.dropout2(src2)
        return src
\`\`\`

## Conclusion

The transformer architecture has transformed the field of NLP by enabling more efficient and effective processing of text data. Understanding its components and mechanics is essential for anyone working with modern NLP models.

As you continue your journey in NLP, experiment with pre-trained transformer models like BERT and GPT to see their capabilities firsthand. The concepts may seem complex at first, but with practice, you'll gain intuition for how these powerful models work.
    `,
    date: "March 15, 2023",
    readTime: "8 min read",
    author: {
      name: "Zakaria Coulibaly",
      avatar: "/focused-ai-engineer.png",
    },
    coverImage: "/transformer-network-diagram.png",
    tags: ["NLP", "Transformers", "Deep Learning"],
    featured: true,
    relatedPosts: ["2", "3"], // Add this line - references to other post IDs
  },
  {
    id: "2",
    slug: "implementing-yolo-object-detection",
    title: "Implementing YOLO Object Detection from Scratch",
    excerpt:
      "Learn how to implement the YOLO (You Only Look Once) object detection algorithm from scratch using PyTorch.",
    content: `
# Implementing YOLO Object Detection from Scratch

YOLO (You Only Look Once) is one of the most popular object detection algorithms due to its speed and accuracy. In this tutorial, we'll implement a simplified version of YOLO from scratch using PyTorch.

## Understanding YOLO

YOLO approaches object detection as a regression problem rather than a classification problem. It divides the image into a grid and predicts bounding boxes and class probabilities for each grid cell.

![YOLO Detection Example](/diverse-objects-detection.png)

## The YOLO Architecture

The YOLO architecture consists of:

1. **Backbone**: A convolutional neural network that extracts features from the input image
2. **Neck**: Additional layers that help in feature aggregation
3. **Head**: Final layers that output predictions

## Implementation Steps

### Step 1: Define the Model Architecture

Let's start by defining a simplified YOLO model:

\`\`\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

class ConvBlock(nn.Module):
    def __init__(self, in_channels, out_channels, kernel_size=3, stride=1):
        super().__init__()
        self.conv = nn.Conv2d(in_channels, out_channels, kernel_size, stride, kernel_size//2, bias=False)
        self.bn = nn.BatchNorm2d(out_channels)
        self.activation = nn.LeakyReLU(0.1)
    
    def forward(self, x):
        return self.activation(self.bn(self.conv(x)))

class YOLOv3(nn.Module):
    def __init__(self, num_classes=80):
        super().__init__()
        self.num_classes = num_classes
        
        # Backbone
        self.backbone = nn.Sequential(
            ConvBlock(3, 32),
            ConvBlock(32, 64, stride=2),
            ConvBlock(64, 128),
            ConvBlock(128, 256, stride=2),
            ConvBlock(256, 512),
            ConvBlock(512, 1024, stride=2),
            ConvBlock(1024, 512),
            ConvBlock(512, 1024)
        )
        
        # Detection head
        self.head = nn.Conv2d(1024, 3 * (5 + num_classes), kernel_size=1)
    
    def forward(self, x):
        features = self.backbone(x)
        output = self.head(features)
        
        # Reshape output for interpretation
        batch_size, _, grid_size, _ = output.shape
        output = output.view(batch_size, 3, 5 + self.num_classes, grid_size, grid_size)
        output = output.permute(0, 1, 3, 4, 2)
        
        return output
\`\`\`

### Step 2: Implement the Loss Function

YOLO uses a complex loss function that combines:
- Bounding box coordinate loss
- Object confidence loss
- Class prediction loss

\`\`\`python
def yolo_loss(predictions, targets, lambda_coord=5.0, lambda_noobj=0.5):
    batch_size = predictions.size(0)
    grid_size = predictions.size(2)
    
    # Extract components from predictions
    pred_boxes = predictions[..., :4]  # x, y, w, h
    pred_conf = predictions[..., 4]    # confidence
    pred_cls = predictions[..., 5:]    # class probabilities
    
    # Extract components from targets
    target_boxes = targets[..., :4]
    target_conf = targets[..., 4]
    target_cls = targets[..., 5:]
    
    # Object mask - cells with objects
    obj_mask = target_conf > 0
    noobj_mask = target_conf == 0
    
    # Coordinate loss
    box_loss = F.mse_loss(
        pred_boxes[obj_mask],
        target_boxes[obj_mask],
        reduction='sum'
    )
    
    # Confidence loss
    conf_obj_loss = F.mse_loss(
        pred_conf[obj_mask],
        target_conf[obj_mask],
        reduction='sum'
    )
    
    conf_noobj_loss = F.mse_loss(
        pred_conf[noobj_mask],
        target_conf[noobj_mask],
        reduction='sum'
    )
    
    # Class loss
    cls_loss = F.binary_cross_entropy_with_logits(
        pred_cls[obj_mask],
        target_cls[obj_mask],
        reduction='sum'
    )
    
    # Combine losses
    total_loss = (
        lambda_coord * box_loss +
        conf_obj_loss +
        lambda_noobj * conf_noobj_loss +
        cls_loss
    ) / batch_size
    
    return total_loss
\`\`\`

### Step 3: Data Preparation

To train YOLO, we need to prepare our data in the right format:

\`\`\`python
from torch.utils.data import Dataset
import cv2
import numpy as np

class YOLODataset(Dataset):
    def __init__(self, image_paths, annotations, grid_size=13, num_classes=80, transform=None):
        self.image_paths = image_paths
        self.annotations = annotations
        self.grid_size = grid_size
        self.num_classes = num_classes
        self.transform = transform
    
    def __len__(self):
        return len(self.image_paths)
    
    def __getitem__(self, idx):
        img_path = self.image_paths[idx]
        img = cv2.imread(img_path)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        
        # Get annotations
        boxes = self.annotations[idx]
        
        if self.transform:
            img, boxes = self.transform(img, boxes)
        
        # Convert to target format
        target = self._create_target(boxes)
        
        return img, target
    
    def _create_target(self, boxes):
        target = torch.zeros(3, self.grid_size, self.grid_size, 5 + self.num_classes)
        
        for box in boxes:
            # Extract box info
            x, y, w, h, cls_id = box
            
            # Convert to grid coordinates
            grid_x = int(x * self.grid_size)
            grid_y = int(y * self.grid_size)
            
            # Find best anchor box
            anchor_idx = 0  # Simplified - would normally find best matching anchor
            
            # Set target values
            target[anchor_idx, grid_y, grid_x, 0] = x * self.grid_size - grid_x  # x offset
            target[anchor_idx, grid_y, grid_x, 1] = y * self.grid_size - grid_y  # y offset
            target[anchor_idx, grid_y, grid_x, 2] = w  # width
            target[anchor_idx, grid_y, grid_x, 3] = h  # height
            target[anchor_idx, grid_y, grid_x, 4] = 1  # confidence
            target[anchor_idx, grid_y, grid_x, 5 + int(cls_id)] = 1  # class
        
        return target
\`\`\`

### Step 4: Training Loop

Now let's implement the training loop:

\`\`\`python
def train_yolo(model, dataloader, optimizer, epochs=100):
    model.train()
    
    for epoch in range(epochs):
        epoch_loss = 0
        
        for batch_idx, (images, targets) in enumerate(dataloader):
            images = images.to(device)
            targets = targets.to(device)
            
            # Forward pass
            predictions = model(images)
            
            # Calculate loss
            loss = yolo_loss(predictions, targets)
            
            # Backward pass
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            
            epoch_loss += loss.item()
            
            if batch_idx % 10 == 0:
                print(f"Epoch {epoch}, Batch {batch_idx}, Loss: {loss.item():.6f}")
        
        print(f"Epoch {epoch}, Average Loss: {epoch_loss / len(dataloader):.6f}")
\`\`\`

### Step 5: Inference and Non-Maximum Suppression

After training, we need to process the model's output to get usable detections:

\`\`\`python
def process_predictions(predictions, confidence_threshold=0.5, nms_threshold=0.4):
    batch_size = predictions.shape[0]
    grid_size = predictions.shape[2]
    num_classes = predictions.shape[-1] - 5
    
    all_boxes = []
    
    for b in range(batch_size):
        boxes = []
        
        # Process grid cells
        for i in range(grid_size):
            for j in range(grid_size):
                for a in range(3):  # 3 anchor boxes
                    # Get confidence
                    confidence = predictions[b, a, i, j, 4]
                    
                    if confidence > confidence_threshold:
                        # Get class probabilities
                        class_scores = predictions[b, a, i, j, 5:]
                        class_id = torch.argmax(class_scores).item()
                        class_score = class_scores[class_id].item()
                        
                        # Get box coordinates
                        x = (predictions[b, a, i, j, 0] + j) / grid_size
                        y = (predictions[b, a, i, j, 1] + i) / grid_size
                        w = predictions[b, a, i, j, 2]
                        h = predictions[b, a, i, j, 3]
                        
                        # Convert to corner format
                        x1 = x - w/2
                        y1 = y - h/2
                        x2 = x + w/2
                        y2 = y + h/2
                        
                        boxes.append([x1, y1, x2, y2, confidence * class_score, class_id])
        
        # Apply non-maximum suppression
        boxes = torch.tensor(boxes)
        if boxes.shape[0] > 0:
            # Sort by confidence
            scores = boxes[:, 4]
            _, indices = torch.sort(scores, descending=True)
            boxes = boxes[indices]
            
            # Apply NMS
            keep_boxes = []
            while boxes.shape[0] > 0:
                keep_boxes.append(boxes[0])
                if boxes.shape[0] == 1:
                    break
                
                # Calculate IoU
                ious = calculate_iou(boxes[0, :4], boxes[1:, :4])
                
                # Filter boxes with IoU > threshold
                boxes = boxes[1:][ious <= nms_threshold]
            
            all_boxes.append(torch.stack(keep_boxes))
        else:
            all_boxes.append(torch.tensor([]))
    
    return all_boxes

def calculate_iou(box, boxes):
    # Calculate intersection areas
    x1 = torch.max(box[0], boxes[:, 0])
    y1 = torch.max(box[1], boxes[:, 1])
    x2 = torch.min(box[2], boxes[:, 2])
    y2 = torch.min(box[3], boxes[:, 3])
    
    intersection = torch.clamp(x2 - x1, min=0) * torch.clamp(y2 - y1, min=0)
    
    # Calculate union areas
    box_area = (box[2] - box[0]) * (box[3] - box[1])
    boxes_area = (boxes[:, 2] - boxes[:, 0]) * (boxes[:, 3] - boxes[:, 1])
    
    union = box_area + boxes_area - intersection
    
    return intersection / union
\`\`\`

## Conclusion

This tutorial covered the basics of implementing YOLO from scratch. In a real-world scenario, you would:

1. Use a more complex backbone like DarkNet
2. Implement feature pyramid networks for better multi-scale detection
3. Use anchor box clustering to determine optimal anchor box dimensions
4. Apply data augmentation to improve generalization

YOLO has evolved through several versions (v1 to v8), each improving upon the previous. The implementation shown here is simplified but captures the core concepts of the YOLO architecture.

For production use, consider using pre-trained models from libraries like PyTorch's torchvision, Ultralytics' YOLOv5/v8, or Darknet.
    `,
    date: "February 2, 2023",
    readTime: "12 min read",
    author: {
      name: "Zakaria Coulibaly",
      avatar: "/focused-ai-engineer.png",
    },
    coverImage: "/diverse-objects-detection.png",
    tags: ["Computer Vision", "Object Detection", "PyTorch"],
    featured: false,
    relatedPosts: ["1", "3"], // Add this line
  },
  {
    id: "3",
    slug: "practical-guide-to-mlops",
    title: "A Practical Guide to MLOps: From Development to Deployment",
    excerpt:
      "Explore the best practices for implementing MLOps in your organization to streamline machine learning model development and deployment.",
    content: `
# A Practical Guide to MLOps: From Development to Deployment

Machine Learning Operations (MLOps) is the practice of efficiently developing, testing, and deploying machine learning models in production environments. This guide will walk you through the key components of MLOps and how to implement them in your organization.

## What is MLOps?

MLOps combines machine learning, DevOps, and data engineering to streamline the machine learning lifecycle. It addresses the unique challenges of deploying ML models in production, such as reproducibility, versioning, monitoring, and governance.

![MLOps Pipeline](/mlops-pipeline-overview.png)

## Key Components of MLOps

### 1. Version Control

Version control is essential for tracking changes to code, data, and models. This ensures reproducibility and collaboration.

\`\`\`python
# Example using DVC (Data Version Control) for data and model versioning
import os

# Initialize DVC
os.system("dvc init")

# Add data to DVC
os.system("dvc add data/training_data.csv")

# Add model to DVC
os.system("dvc add models/trained_model.pkl")

# Commit changes to Git
os.system("git add .")
os.system("git commit -m 'Add training data and model'")

# Push to remote storage
os.system("dvc push")
\`\`\`

### 2. Continuous Integration and Continuous Deployment (CI/CD)

CI/CD pipelines automate the testing and deployment of ML models, ensuring that only high-quality models make it to production.

\`\`\`yaml
# Example GitHub Actions workflow for ML model CI/CD
name: ML Model CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.8'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run tests
      run: |
        pytest tests/

  train:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.8'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Train model
      run: |
        python train.py
    - name: Upload model artifact
      uses: actions/upload-artifact@v2
      with:
        name: model
        path: models/trained_model.pkl

  deploy:
    needs: train
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Download model artifact
      uses: actions/download-artifact@v2
      with:
        name: model
        path: models/
    - name: Deploy to production
      run: |
        # Deploy model to production environment
        python deploy.py
\`\`\`

### 3. Model Registry

A model registry stores and manages ML models, making it easy to track different versions and deploy them to various environments.

\`\`\`python
# Example using MLflow for model registry
import mlflow
from mlflow.tracking import MlflowClient

# Set MLflow tracking URI
mlflow.set_tracking_uri("http://localhost:5000")

# Create or get experiment
experiment_name = "fraud_detection"
experiment = mlflow.get_experiment_by_name(experiment_name)
if experiment is None:
    experiment_id = mlflow.create_experiment(experiment_name)
else:
    experiment_id = experiment.experiment_id

# Start a run
with mlflow.start_run(experiment_id=experiment_id) as run:
    # Log parameters
    mlflow.log_param("learning_rate", 0.01)
    mlflow.log_param("batch_size", 64)
    
    # Train model
    model = train_model(learning_rate=0.01, batch_size=64)
    
    # Log metrics
    mlflow.log_metric("accuracy", 0.92)
    mlflow.log_metric("f1_score", 0.89)
    
    # Log model
    mlflow.sklearn.log_model(model, "model")
    
    # Register model
    model_uri = f"runs:/{run.info.run_id}/model"
    mv = mlflow.register_model(model_uri, "fraud_detection_model")
    print(f"Model registered: {mv.name} version {mv.version}")
\`\`\`

### 4. Feature Store

A feature store centralizes the storage, management, and serving of features for machine learning models.

\`\`\`python
# Example using Feast feature store
from feast import FeatureStore
import pandas as pd

# Initialize feature store
store = FeatureStore(repo_path=".")

# Get training data
training_df = pd.DataFrame({
    "customer_id": [1, 2, 3, 4],
    "event_timestamp": pd.to_datetime([
        "2021-04-01", "2021-04-02", "2021-04-03", "2021-04-04"
    ])
})

# Retrieve features from feature store
feature_vector = store.get_historical_features(
    entity_df=training_df,
    features=[
        "customer_features:age",
        "customer_features:income",
        "transaction_features:transaction_count_7d",
        "transaction_features:average_transaction_amount_30d"
    ]
).to_df()

# Use feature vector for training
X = feature_vector.drop(["customer_id", "event_timestamp"], axis=1)
y = get_labels(training_df)  # Get labels from somewhere
model = train_model(X, y)
\`\`\`

### 5. Model Monitoring

Monitoring ML models in production is crucial for detecting performance degradation, data drift, and other issues.

\`\`\`python
# Example using Evidently for model monitoring
import pandas as pd
from evidently.dashboard import Dashboard
from evidently.tabs import DataDriftTab, CatTargetDriftTab

# Load reference and current data
reference_data = pd.read_csv("data/reference.csv")
current_data = pd.read_csv("data/current.csv")

# Create monitoring dashboard
dashboard = Dashboard(tabs=[DataDriftTab, CatTargetDriftTab])
dashboard.calculate(reference_data, current_data, column_mapping=None)

# Save dashboard
dashboard.save("monitoring_report.html")

# Set up alerts for drift detection
if dashboard.get_drift_metrics()["data_drift"]["share_of_drifted_features"] > 0.3:
    send_alert("High data drift detected!")
\`\`\`

### 6. Model Serving

Serving ML models efficiently is key to providing low-latency predictions in production.

\`\`\`python
# Example using FastAPI for model serving
from fastapi import FastAPI
import joblib
import numpy as np
from pydantic import BaseModel

app = FastAPI()

# Load model
model = joblib.load("models/trained_model.pkl")

# Define request body
class PredictionRequest(BaseModel):
    features: list

# Define prediction endpoint
@app.post("/predict")
def predict(request: PredictionRequest):
    features = np.array(request.features).reshape(1, -1)
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0].max()
    
    return {
        "prediction": int(prediction),
        "probability": float(probability)
    }
\`\`\`

## Implementing MLOps in Your Organization

### Step 1: Assess Your Current State

Before implementing MLOps, assess your organization's current ML workflow:
- How are models currently developed and deployed?
- What are the pain points in the current process?
- What tools and technologies are already in use?

### Step 2: Define Your MLOps Strategy

Based on your assessment, define an MLOps strategy that addresses your specific needs:
- Which MLOps components are most critical for your organization?
- What tools and technologies will you use?
- How will you measure success?

### Step 3: Start Small and Iterate

Don't try to implement everything at once. Start with a small project and gradually expand:
1. Begin with version control for code and data
2. Add automated testing and CI/CD
3. Implement model registry and monitoring
4. Add feature store and advanced serving capabilities

### Step 4: Build a Culture of Collaboration

MLOps requires collaboration between data scientists, ML engineers, DevOps engineers, and other stakeholders:
- Foster communication and knowledge sharing
- Define clear roles and responsibilities
- Provide training and resources

## Common MLOps Challenges and Solutions

### Challenge 1: Data Quality and Governance

**Solution:** Implement data validation, versioning, and lineage tracking. Use tools like Great Expectations for data validation and DVC for versioning.

### Challenge 2: Model Reproducibility

**Solution:** Use deterministic training pipelines, version control for code and data, and containerization to ensure reproducibility.

### Challenge 3: Model Deployment Delays

**Solution:** Automate the deployment process with CI/CD pipelines and standardize model packaging formats (e.g., ONNX, TensorFlow SavedModel).

### Challenge 4: Model Performance Degradation

**Solution:** Implement comprehensive monitoring for data drift, concept drift, and model performance. Set up automated retraining when performance drops below thresholds.

## Conclusion

MLOps is essential for organizations looking to derive real value from their machine learning initiatives. By implementing the key components of MLOps—version control, CI/CD, model registry, feature store, monitoring, and serving—you can streamline the ML lifecycle and ensure that your models perform reliably in production.

Remember that MLOps is not just about tools and technologies; it's also about people and processes. Building a culture of collaboration and continuous improvement is just as important as implementing the right technical solutions.

Start small, iterate, and gradually build a robust MLOps practice that meets your organization's specific needs.
    `,
    date: "January 10, 2023",
    readTime: "10 min read",
    author: {
      name: "Zakaria Coulibaly",
      avatar: "/focused-ai-engineer.png",
    },
    coverImage: "/mlops-pipeline-overview.png",
    tags: ["MLOps", "DevOps", "Production ML"],
    featured: false,
    relatedPosts: ["1", "2"], // Add this line
  },
]
