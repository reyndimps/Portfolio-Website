import Akina from '../assets/Akina.jpg';
import TransportHub from '../assets/TransportHub.jpg';
import Efresseedlings from '../assets/Efresseedlings.jpg';
import Resume from '../assets/Resume-nako.jpg';

import CybersecurityPic from '../assets/certificates/cybersecurity.jpg';
import HtmlCssPic from '../assets/certificates/html-css.jpg';
import DatabasePic from '../assets/certificates/database.jpg';
import NetworkSecurityPic from '../assets/certificates/network-security.jpg';

import Cybersecurity from '../assets/certificates/cybersecurity-certificate.pdf';
import HtmlCss from '../assets/certificates/html-css-certificate.pdf';
import Database from '../assets/certificates/database-certificate.pdf';
import NetworkSecurity from '../assets/certificates/network-security-certificate.pdf';

export const data=[
    {
        id:1,
        name:"Akina POS & Inventory System",
        image:Akina,
        github:"https://github.com/reyndimps/POS-Inventory-System.git",
        description:"A POS and inventory system that streamlines retail operations with real-time stock tracking and sales processing.",
    },
    {
        id:2,
        name:"Resume Website",
        image:Resume,
        github:"https://github.com/reyndimps/Resume.git",
        description:"A personal resume website showcasing skills, experience, and projects in a clean, responsive layout, designed professionally.",
    },
    {
        id:3,
        name:"Efres Seedlings E-commerce",
        image:Efresseedlings,
        github:"https://github.com/reyndimps/E-commerce_Seedlings_Website-Predicts_Plant_Readiness..git",
        description:"An e-commerce platform for seedlings with a plant readiness prediction feature powered by data-driven insights.",
    },
    {
        id:4,
        name:"Transport Hub Booking System",
        image:TransportHub,
        github:"https://github.com/reyndimps/Transportation-Management-System.git",
        description:"A transportation management and booking system designed to simplify vehicle scheduling and route management.",
    },
]

export const certificates = [
    {
        id: 1,
        name: 'IT Specialist in Cybersecurity',
        image: CybersecurityPic,
        description: 'This certification validates my skills in cybersecurity, covering topics like threat analysis, network security, and incident response. I have demonstrated proficiency in safeguarding systems and data from cyber threats.',
        download: Cybersecurity,
    },
    {
        id: 2,
        name: 'IT Specialist in HTML and CSS',
        image: HtmlCssPic,
        description: 'This certification showcases my expertise in front-end web development, specifically in creating and styling web pages using HTML5 and CSS3. I can build responsive, visually appealing, and accessible user interfaces.',
        download: HtmlCss,
    },
    {
        id: 3,
        name: 'IT Specialist in Databases',
        image: DatabasePic,
        description: 'This certification confirms my knowledge of database design, management, and implementation. I am skilled in working with various SQL and NoSQL databases to store, retrieve, and manage data efficiently and securely.',
        download: Database,
    },
    {
        id: 4,
        name: 'IT Specialist in Network Security',
        image: NetworkSecurityPic,
        description: 'This certification highlights my abilities in network security, including configuring firewalls, implementing VPNs, and monitoring network traffic. I can protect network infrastructure from unauthorized access and threats.',
        download: NetworkSecurity,
    },
];