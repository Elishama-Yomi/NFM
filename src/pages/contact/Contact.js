import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './contact.css'
import Form from './form';
const Contact = () => { 
    return (
       <div>
           <Announcement/>
      <Navbar/>
      <div className='pick' style={{backgroundColor: "#efddc7"}}>
       <div style={{display: "flex"}}>
            <div className='info'>
            <h1 className='contact'>Recyclable Waste Pickup</h1>
                <br></br>
                <h2>We offer recyclable waste pickup services as part of our contribution to protecting the environment and safeguarding public health.<br></br><br></br> 
                    Recyclables we collect include PET plastics, aluminium cans, nylon bags, glass bottles, cartons & old newspapers. 
                    These are supplied to recycling companies and are eventually converted into finished products. 
                    <br></br>We receive recyclable materials that are clean, dry and bagged.
                    <br></br> <br></br>Place a request now, we would love to help you manage your waste.</h2>
            </div>
           
           <div >
        <Form />  
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Contact;