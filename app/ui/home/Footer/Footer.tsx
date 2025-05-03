import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <ContactForm />
      <aside className="text-primary-foreground">
        <p>Copyright © 2025 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
