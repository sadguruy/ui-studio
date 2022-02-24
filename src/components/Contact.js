const Contact=()=>{
  return(
    <div className="wrapper contact" id="contact">
      <div className="contact_title">
        <h4>Get In Touch</h4>
        <p>Please fill out the quick form we will be in touch with lightening speed</p>
      </div>
      <div className="contact_form">
        <form action="" className="wrapper">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Contact Number"/>
            <textarea name="" placeholder="Message"></textarea>
            <button type="submit"><i className="fa fa-send"></i>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;