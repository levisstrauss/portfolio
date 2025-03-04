
import { ProjectType } from '../../components/project-card';

export const projectsData: ProjectType[] = [
    {
        id: 1,
        title: 'Advanced Flower Classification System',
        description: 'An advanced flower classification system using EfficientNet-B0 leverages transfer learning ' +
            'for high accuracy and efficiency. Fine-tuned on a custom dataset, it excels in species identification, ' +
            'showcasing modern CNNs in action.',
        image: "/projects/flower.webp",
        category: 'Transfer Learning',
        technologies: ['PyTorch', 'EfficientNet-B0', 'Python', 'Matplotlib'],
        links: {
            demo: 'https://example.com/demo',
            github: 'https://github.com/levisstrauss/flower_classification',
            moreInfo: '/projects/flower-classification'
        }
    },
    {
        id: 2,
        title: 'Dog Breed Classification System',
        description: 'A sophisticated dog breed classification system utilizing VGG, ResNet, and AlexNet achieves 100% ' +
            'dog detection accuracy and 93.3% breed classification with VGG. The project highlights effective transfer ' +
            'learning for precise image classification.',
        image: "/projects/dog_breed.webp",
        category: 'Transfer Learning',
        technologies: ['PyTorch', 'VGG', 'ResNet', 'AlexNet', 'Python', 'PIL'],
        links: {
            demo: 'https://example.com/demo',
            github: 'https://github.com/levisstrauss/Dog_breed_identification',
            moreInfo: '/projects/dog-breed-classifier'
        }
    },
    {
        id: 3,
        title: 'Face Mask Detection System',
        description: 'A face mask detection system using ResNet18 achieves 98.2% accuracy with fast 0.12s ' +
            'inference time. Features custom model head architecture and Gradio UI for interactive detection.',
        image: "/projects/face_mask.webp",
        category: 'Transfer Learning',
        technologies: ['PyTorch', 'ResNet18', 'Gradio', 'Python', 'Torchvision'],
        links: {
            demo: 'https://huggingface.co/spaces/Codemon/maskguard',
            github: 'https://github.com/username/face-mask-detection',
            moreInfo: '/projects/face-mask-detection'
        }
    }
];


