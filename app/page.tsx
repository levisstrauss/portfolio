"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../tailwind.css';

// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";
// @ts-ignore
import fragmentShader from "./shaders/fragment.glsl";

// @ts-ignore
import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
// @ts-ignore
import atmosphereFragmentShader from "./shaders/atmosphereFragment.glsl";

export default function Home() {

    const canvasContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvasContainer = document.querySelector('#canvasContainer');
        const scene = new THREE.Scene();

        // @ts-ignore
        const camera = new THREE.PerspectiveCamera(75, canvasContainer?.offsetWidth / canvasContainer?.offsetHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            // @ts-ignore
            canvas: document.querySelector('canvas'),
        });


        // @ts-ignore
        renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio)

        // Create a sphere
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5, 50, 50),
            new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    globeTexture: {
                        value: new THREE.TextureLoader().load('./img/globes.jpg')
                    }
                }
            })
        );

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        if (canvasContainerRef.current) {
            canvasContainerRef.current.addEventListener('mousemove', handleMouseMove);
        }


        // Create an atmosphere
        const atmosphere = new THREE.Mesh(
            new THREE.SphereGeometry(5, 50, 50),
            new THREE.ShaderMaterial({
                vertexShader: atmosphereVertexShader,
                fragmentShader: atmosphereFragmentShader,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide
            })
        );

        atmosphere.scale.set(1.1, 1.1, 1.1);

        scene.add(atmosphere);

        const group = new THREE.Group();
        group.add(sphere)
        scene.add(group)

        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff
        });

        const starsVertices = []
        for (let i = 0; i < 10000; i++){
           const x = (Math.random() - 0.5) * 2000;
           const y = (Math.random() - 0.5) * 2000;
           const z = -Math.random() * 3000;
           starsVertices.push(x, y, z);
        }

        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(
            starsVertices, 3));

        const stars = new THREE.Points( starGeometry, starMaterial);
        scene.add(stars)

        camera.position.z = 15;


        // @ts-ignore
        function createPoint(lat, lng) {
            const point = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 50, 50),
                new THREE.MeshBasicMaterial({
                    color: '#ff0000'
                })
            );

            const latitude = (lat /180) * Math.PI;
            const longitude = (lng /180) * Math.PI;
            const radius = 5;

            const x = radius * Math.cos(latitude) * Math.sin(longitude)
            const y = radius * Math.sin(latitude)
            const z = radius * Math.cos(latitude) * Math.cos(longitude)

            point.position.x = x
            point.position.y = y
            point.position.z = z

            group.add(point);
        }

        createPoint(23.6345, -102.5528);
        createPoint(-14.235, -51.9253);
        createPoint(7.539989, -5.54708);
        createPoint(39.3812669989, -97.922211);
        createPoint(37.0902, 95.7129);

        sphere.rotation.y = -Math.PI / 2;

        const mouse = { x: 0, y: 0 };

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            sphere.rotation.y += 0.003;
            gsap.to(group.rotation, {
                x: -mouse.y * 1.8,
                y: mouse.x * 1.8,
                duration: 2
            })
        };
        animate();
    }, []);

    return (
        <div className='flex h-screen bg-black'>
            <div className="w-1/2 flex flex-col justify-center px-8">
                <div style={{maxWidth:500}} className='mx-auto'>
                   <h1 className='text-white text-4xl mb-8 leading-none'>HI AND WELCOME TO MY PORTFOLIO</h1>
                    <p className='text-gray-400 mb-8'>
                        Computer Science enthusiast with a fervent passion for
                        bridging the realms of Artificial Intelligence and Software
                        Engineering. I am driven by the challenge of leveraging AI to
                        engineer solutions that matter, aspiring always to push the
                        boundaries of what software can achieve. My journey in this
                        dynamic field has been marked by rigorous academic pursuits,
                        hands on projects, and a ceaseless desire to learn and innovate.
                        Lets harness the potential of technology, together.
                    </p>
                    <p className='text-white'>Want to learn more about me, navigate the globe</p>
                    <div className="flex justify-start mt-4 space-x-4" >
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl text-white hover:text-gray-400" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl text-white hover:text-gray-400" />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <FontAwesomeIcon icon={faTwitter} className="text-xl text-white hover:text-gray-400" />
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} className="text-xl text-white hover:text-gray-400" />
                        </a>
                    </div>
                </div>

            </div>
            <div ref={canvasContainerRef}  className="w-1/2" id="canvasContainer">
                <canvas></canvas>
            </div>
        </div>
    )
}
