
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/logo-icons/logo.png'

const Footer = () => {
    return (
        <div className="">
            <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10 md:px-32 lg:px-56 md:justify-between py-20  bg-black text-white">
                <Link to='/'>
                    <div className="lg:flex items-center gap-2">
                        <img className="w-24" src={Logo} alt="" />
                        <p className="text-xl font-semibold text-red-500">GearHeads</p>
                    </div>
                </Link>
                <div className='flex flex-col'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col'>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

