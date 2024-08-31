import React from "react";
import "./Card.css"
import { IoDocument} from "react-icons/io5";
import { IoMdCheckmark, IoMdPeople, IoMdStats } from "react-icons/io";
const Card=()=>{
    return(
        <div className="card">
            <div className="card--header">
                <div className="card--icon">
                    <IoDocument/>
                </div>
                <div className="card--body">
                    <h2 className="invoice">INVOICE</h2>
                    <div className="growth">
                      <p>Total Invoices</p>
                      <span>xyz</span>
                    </div>
                   
                </div>
                
            </div>
            
            <div className="card--header-1">
                <div className="card--icon">
                    <IoMdPeople/>
                </div>
                <div className="card--body">
                    <h2 className="customer">CUSTOMER</h2>
                    <div className="growth">
                      <p>Total Invoices</p>
                      <span>xyz</span>
                    </div>
                   
                </div>
                
            </div>
            
            <div className="card--header-2">
                <div className="card--icon">
                    <IoMdCheckmark/>
                </div>
                <div className="card--body">
                    <h2 className="booking">BOOKING</h2>
                    <div className="growth">
                      <p>Total Invoices</p>
                      <span>xyz</span>
                    </div>
                   
                </div>
                
            </div>
            <div className="card--header-3">
                <div className="card--icon">
                    <IoMdStats/>
                </div>
                <div className="card--body">
                    <h2 className="booking">REPORTS</h2>
                    <div className="growth">
                      <p>Total Invoices</p>
                      <span>xyz</span>
                    </div>
                   
                </div>
                
            </div>


        </div>
    )
}
export default Card