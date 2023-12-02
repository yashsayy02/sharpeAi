import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import SwitchPage from '../components/SwitchPage';

const TransactionPage = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [amount, setAmount] = useState("");
    const navigate = useNavigate(); //0x71C7656EC7ab88b098defB751B7401B5f6d8976F

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!walletAddress || !isValidEthereumAddress()) {
            toast.error("Please Enter valid wallet address");
            return;
        }else if(!amount || amount < 0 || amount > 10000){
            if(!amount){
                toast.error("Please enter an amount");
            }else if(amount < 0){
                toast.error("amount should be positive number");
            }else{
                toast.error("amount can not be greater than 10000");
            }
            return;
        }

        toast.success("Transaction successful");
        return;

    };

    function isValidEthereumAddress() {
        const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;

        return ethereumAddressRegex.test(walletAddress);
    }

    return (
        <>
            <div className="form">
                <div className="title">Transaction Page</div>
                <div className="input-container ic1">
                    <input
                        id="walletAddress"
                        className="input"
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder=" "
                    />
                    <div className="cut"></div>
                    <label for="walletAddress" className="placeholder">
                        Wallet address
                    </label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="amount"
                        className="input"
                        type="number"
                        placeholder=" "
                        
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <div className="cut"></div>
                    <label for="amount" className="placeholder">
                        amount
                    </label>
                </div>
                <button type="text" className="submit" onClick={handleSubmit}>
                    submit
                </button>
                <button type="text" className="submit2" onClick={() => {
                    setWalletAddress(
                        "0x71c7656ec7ab88b098defb751b7401b5f6d8976f"
                    );
                }}>
                    Get Wallet Address
                </button>
            </div>

            <div className='text-white'>
                <SwitchPage page1="homePage" page2="dataPage" />
            </div>
        </>
    );
}

export default TransactionPage

