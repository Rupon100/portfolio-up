import emailIcon from '../assets/icons/message.png';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
const Contact = () => {

 
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
    
        const serviceId = "service_x6btge8";
        const tempId = "template_kux8m1e";
        const publicKey = "lb959JciDw6W3a1-T";
    
        const formData = new FormData(e.target);
    
        
        const emailParams = {
            to_name: "RuponX",   
            name: formData.get("name"), 
            from_email: formData.get("email"),  
            message: formData.get("message"), 
        };
    
        emailjs.send(serviceId, tempId, emailParams, publicKey)
            .then((response) => {
                // console.log("status: ", response.status, response.text);
                if(response.status == 200){
                    return toast.success("Email sent successfully!!")
                }
            })
            .catch((error) => {
                // console.error("Email sending failed:", error);
            });
    
        e.target.reset(); 
    };
    
    

    
  return (
    <div
      id="contact"
      className="relative md:min-h-[500px] lg:min-h-[600px] flex justify-center items-center p-2 md:p-4 overflow-hidden"
    >
        <Toaster />
      {/* aniamtion ball */}
      <motion.div 
        className="absolute z-1 w-12 h-12 rounded-2xl bg-text bottom-0 right-0 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div 
        className="absolute z-1 w-12 h-12 rounded-2xl bg-text top-0 left-0 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      {/* <div className="absolute z-10 w-20 h-20 rounded-2xl bg-text bottom-0 right-0 blur-3xl"></div>
      <div className="absolute z-10 w-20 h-20 rounded-2xl bg-text top-0 left-0 blur-3xl"></div> */}
      <div className="w-full ">
        <div className="p-4 max-w-4xl h-full flex gap-8 text-center flex-col">
          <div className='flex justify-center items-center gap-4' >
            <h2 className="title">Get in Touch</h2>
            <motion.div 
              animate={{ y: [5, 0, 5] }} 
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <img src={emailIcon} alt="email icon" className="w-14 h-14" />
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 md:gap-6">
            <input
              className="p-2 rounded"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="p-2 rounded"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <textarea
              className="resize-none p-2 py-6 rounded"
              name="message"
              placeholder="Write message"
            ></textarea>
            <button className='btn btn-block bg-transparent text-text' >Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
