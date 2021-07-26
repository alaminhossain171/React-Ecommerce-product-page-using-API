import React, { useState } from 'react'
import '../index.css';
import Modal from 'react-modal'
import CancelIcon from '@material-ui/icons/Cancel';

Modal.setAppElement('#root');
const Contact = () => {
const [fullinfo,setFullinfo]=useState({
    fName:'',
    mail:'',
    phone:'',
    msg:''
});

const [see,setSee]=useState('');
const [modalIsOpen,setModalIsOpen]=useState(false);
const [check,setCheck]=useState(false);

function handleChange(e){
    const {name,value}=e.target;
    setFullinfo(function(prev){
        if(name==="txtName"){
            return{
            fName:value,
            mail:prev.mail,
            phone:prev.phone,
            msg:prev.msg
            }
        }

        else if(name==="txtEmail"){
            return{
                fName:prev.fName,
            mail:value,
            phone:prev.phone,
            msg:prev.msg
            }
        }


        else if(name==="txtPhone"){
            return{
                fName:prev.fName,
            mail:prev.mail,
            phone:value,
            msg:prev.msg
            }
        }


        else if(name==="txtMsg"){
            return{
                fName:prev.fName,
            mail:prev.mail,
            phone:prev.phone,
            msg:value
            }
        }
    })

}

function handleClick(event){
    event.preventDefault();
    setSee(fullinfo);

    if(fullinfo.fName===""){
return null;
    }
   else if(fullinfo.mail===""){
        return null;
            }
         else if(fullinfo.phone===""){
                return null;
                    }

                    else if(fullinfo.msg===""){
                        return null;
                            }
    else{
        setModalIsOpen(true);
        setCheck(true);
    }
    
  
}




    
    return (
        <>
        <div className="container contact-form ">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
                {check===false?<h5 className="text-danger">Please provide information for all field!</h5>:<h5 className="text-success">Thank for providing information </h5>}
                
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group ">
                            <input type="text" onChange={handleChange} name="txtName" className="form-control" placeholder="Your Name *" value={fullinfo.fName} required/>
                        </div>
                        <div className="form-group mt-2">
                            <input type="text" onChange={handleChange}  name="txtEmail" className="form-control" placeholder="Your Email *" value={fullinfo.mail} required/>
                        </div>
                        <div className="form-group mt-2">
                            <input type="text" onChange={handleChange}  name="txtPhone" className="form-control" placeholder="Your Phone Number *" value={fullinfo.phone} required/>
                        </div>
                        <div className="form-group m-3 mt-2">
                            <input onClick={handleClick} type="submit" name="btnSubmit" className="btnContact" value="Submit"/>
                        </div>



                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" onChange={handleChange}  value={fullinfo.msg} className="form-control" placeholder="Your Message *" style={{width:"100%",height:"150px"}} required></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
<div>


    
<Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} style={{

overlay:{

 width:"50%",
 height:"50%",
 margin:"0 auto",
  backgroundColor: 'rgba(255, 255, 255, 0.75)'
},
content: {
 textAlign:'center'
}

}}>
<h2>Hello Mr/Mrs {see.fName}
</h2>
<h3>We will review your Message as soon as possible</h3>
<h4>Be patient ! Thank you 😇</h4>



<CancelIcon onClick={()=>setModalIsOpen(false)} />
</Modal>


</div>


</>
    )
}

export default Contact
