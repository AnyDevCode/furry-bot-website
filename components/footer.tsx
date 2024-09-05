const Footer = () => {

    const getYear = () => {
        return new Date().getFullYear();
    }

    return ( 
        <footer className="bg-[#202225] py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {getYear()} Furry Bot. All rights reserved.</p>
          <div className="mt-4">
            <a href="/terms-of-service" className="text-[#7289da] hover:underline mr-4">
              Terms of Service
            </a>
            <a href="/privacy-policy" className="text-[#7289da] hover:underline mr-4">
              Privacy Policy
            </a>
            <a href="mailto:contact.furrybot@anydevcode.com" className="text-[#7289da] hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;