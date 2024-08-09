//Design Tool Component : Mikaeel Zaman

import Button from "../Button"
import Image from "../Image"
import "./style.css";
import Card from "../Card";
import Uploadicon from "../Uploadicon";
import Saveicon from "../Saveicon";
import Manicon from "../Manicon";


const Designtool = () => {
    return (
        <Card header="Design Tool">
            <div className="toolContainer">
                <div className="buttonContainer">
                    <Button label={<Uploadicon />} />
                    <Button label={<Saveicon />} />
                    <Button label={<Manicon />} />
                </div>
                <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
            </div>
        </Card>
    )
}

export default Designtool;