
import { ProjectType } from '../../components/project-card';

export const projectsData: ProjectType[] = [
    {
        id: 1,
        title: 'Advanced Flower Classification System',
        description: 'An advanced flower classification system using EfficientNet-B0 leveraging transfer learning ' +
            'for high accuracy and efficiency. Fine-tuned on a custom dataset, it excels in species identification, ' +
            'showcasing modern CNNs in action.',
        image: "/projects/flower.webp",
        category: 'Computer Vision',
        technologies: ['PyTorch', 'EfficientNet-B0', 'Transfer Learning', 'CNN'],
        links: {
            demo: 'https://example.com/demo',
            github: 'https://github.com/levisstrauss/flower_classification',
            moreInfo: '/projects/flower-classification'
        }
    },
    {
        id: 2,
        title: 'Multi-Architecture Dog Breed Classification',
        description: 'Engineered a high-performance computer vision system comparing VGG, ResNet, and AlexNet architectures. ' +
            'Achieved 100% dog detection accuracy and 93.3% breed classification precision using an optimized VGG implementation. ' +
            'Features custom data augmentation and model ensemble techniques to enhance generalization.',
        image: "/projects/dog_breed.webp",
        category: 'Computer Vision',
        technologies: ['PyTorch', 'Transfer Learning', 'Model Ensembles', 'CNN Architecture Design'],
        links: {
            demo: 'https://example.com/demo',
            github: 'https://github.com/levisstrauss/Dog_breed_identification',
            moreInfo: '/projects/dog-breed-classifier'
        }
    },
    {
        id: 4,
        title: 'FoodVision Big: 101-Class Food Classifier',
        description: 'Built an advanced food classification system capable of identifying 101 different food categories ' +
            'using a fine-tuned EfficientNetB2 architecture. Achieved remarkable performance with only 5 training epochs ' +
            'through effective feature extraction and strategic data augmentation, deployed with an interactive Gradio interface.',
        image: "/projects/food.webp",
        category: 'Computer Vision',
        technologies: ['PyTorch', 'Transfer Learning', 'EfficientNet', 'Gradio', 'Hugging Face Spaces'],
        links: {
            demo: 'https://huggingface.co/spaces/Codemon/foodvision_big',
            github: 'https://github.com/levisstrauss/food-vision-big',
            moreInfo: '/projects/foodvision-big'
        }
    }
    // {
    //     id: 3,
    //     title: 'Real-time Face Mask Detection System',
    //     description: 'Developed a production-optimized face mask detection system achieving 98.2% accuracy with ' +
    //         'ultra-fast 0.12s inference time. Implemented custom model head architecture on ResNet18 backbone, ' +
    //         'with deployment to Hugging Face Spaces for real-world accessibility and monitoring.',
    //     image: "/projects/face_mask.webp",
    //     category: 'Computer Vision',
    //     technologies: ['PyTorch', 'Model Optimization', 'Transfer Learning', 'Hugging Face Deployment'],
    //     links: {
    //         demo: 'https://huggingface.co/spaces/Codemon/maskguard',
    //         github: 'https://github.com/username/face-mask-detection',
    //         moreInfo: '/projects/face-mask-detection'
    //     }
    // }
];


