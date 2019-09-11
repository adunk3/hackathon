import React, {useState} from 'react';
import { ChatBot } from 'aws-amplify-react';






const Chat = () => {

    const [alcohol, setAlcohol] = useState("");

    const handleComplete = (err, confirmation) => {
        if (err) {
            alert('Bot conversation failed')
            return 'Error';
        }
        alert('Success: ' + JSON.stringify(confirmation, null, 2));
        return 'Reservation booked. Thank you! What would you like to do next?';
    }


    return (

        <div>
            <ChatBot
        title="Trailhead Tim"
        botName="BookTripBotMOBILEHUB"
        welcomeMessage="Welcome, how can I help you today?"
        onComplete={handleComplete.bind()}
        clearOnComplete={true}
      />
        </div>



      );
}

export default Chat;