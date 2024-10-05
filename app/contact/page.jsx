"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from "@/components/Alert";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+1) 215 535 9838",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "zcoulibalyeng@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Pittsburgh Greater Area",
    }
]

import { motion } from "framer-motion";

const Contact = () => {
    const formRef = useRef();

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleServiceChange = (value) => {
        setForm({ ...form, service: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const test = emailRegex.test(form.email);
        if (test === false) {
            showAlert({
                show: true,
                text: 'Please enter a valid email address',
                type: 'danger',
            });
            setTimeout(() => {
                hideAlert(true);
            }, 3000);

            return;
        }
        setLoading(true);
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.firstname + ' ' + form.lastname,
                to_name: 'Zakaria Coulibaly',
                from_email: form.email,
                to_email: 'zcoulibalyeng@gmail.com',
                phone: form.phone,     // If needed
                service: form.service, // Include selected service
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
            .then(() => {
                setLoading(false);
                showAlert({
                    show: true,
                    text: 'Thank you for your message 😃',
                    type: 'success',
                });

                setTimeout(() => {
                    hideAlert(false);
                    setForm({
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                    });
                }, 3000);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error:', error);
                if (error.response) {
                    console.error('Response:', error.response);
                }

                showAlert({
                    show: true,
                    text: "I didn't receive your message 😢",
                    type: 'danger',
                });
            });
    }
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6"
        >
            {alert.show && <Alert {...alert} />}

           <div className="container mx-auto">
               <div className="flex flex-col xl:flex-row gap-[30px]">
                  {/*------------ Form --------------------*/}
                   <div className="xl:w-[54%] order-2 xl:order-none">
                       <form ref={formRef} onSubmit={handleSubmit}
                             className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                       >
                           <h3 className="text-4xl text-accent">Let&#39;s work together</h3>
                           <p className="text-white/60">
                               Let’s collaborate to create innovative solutions that drive results.
                           </p>
                           {/*------------ Input --------------------*/}
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <Input type="text" name="firstname" placeholder="John" value={form.firstname} onChange={handleChange} required />
                               <Input type="text" name="lastname" placeholder="Doe" value={form.lastname} onChange={handleChange} required />
                               <Input type="email" name="email" placeholder="johnDoe@gmail.com" value={form.email} onChange={handleChange} required/>
                               <Input type="phone" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
                           </div>
                           {/*------------ Select --------------------*/}
                           <Select onValueChange={handleServiceChange}>
                               <SelectTrigger className="w-full">
                                   <SelectValue placeholder="Select a service" />
                               </SelectTrigger>
                               <SelectContent>
                                   <SelectGroup>
                                       <SelectLabel>Select a service</SelectLabel>
                                       <SelectItem value="Web/Mobile Development">Web/Mobile Development</SelectItem>
                                       <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                       <SelectItem value="ML/AI">ML/AI</SelectItem>
                                       <SelectItem value="Cloud and Automation">Cloud and Automation</SelectItem>
                                   </SelectGroup>
                               </SelectContent>
                           </Select>
                           {/*------------ TextArea --------------------*/}
                           <Textarea
                               name="message"
                               className="h-[200px]"
                               placeholder="Your message here..."
                               value={form.message}
                               onChange={handleChange}
                               required
                           />
                           {/*------------ Submit btn-------------------*/}
                           <Button size="md" className="max-w-40" disabled={loading}>
                               {loading ? 'Sending...' : 'Send message'}
                           </Button>
                       </form>
                   </div>
                   {/*------------ Info  --------------------*/}
                   <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                       <ul className="flex flex-col gap-10">
                           {info.map((item, index) => {
                               return (
                                   <li key={index} className="flex items-center gap-6">
                                       <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                                       text-accent rounded-md flex items-center justify-center"
                                       >
                                           <div className="text-[28px]">{item.icon}</div>
                                       </div>
                                       <div className="flex-1">
                                           <p className="text-white/60">{item.title}</p>
                                           <h3 className="text-xl">{item.description}</h3>
                                       </div>
                                   </li>
                               )
                           })}
                       </ul>
                   </div>
               </div>
           </div>
        </motion.section>
    )
}

export default Contact;
