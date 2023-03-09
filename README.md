https://drive.google.com/file/d/18re5JxbeuG3cif6e-b3AenMMam2Gd8ai/view?usp=drivesdk
https://drive.google.com/file/d/1_wF7n-fsadWt46A1biY60plQjMIOr9cy/view?usp=share_link


const handleFormSubmit = async (e) => {

    const url='https://api.telegram.org/bot5877085550:AAHI6D531ufEngsZOI2QqoNatteNc_vU8yI/sendMessage'
    e.preventDefault();

    const object={
      chat_id:"-887358154",
      text:"Message from E-Skills " +"\n"+"Name: "+formData.companyName + "\n" + "Email: "+formData.email  + "\n" + "Phone: "+formData.phoneNumber + "\n" + "Subject: "+formData.subject+ "Message: "+formData.message
    }
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(url, object , config)
      .catch(err => alert(err.message));

    if (!res) return;

    // alert('Form submitted successfully.')
  }
