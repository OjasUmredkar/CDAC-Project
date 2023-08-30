import React from 'react'

function PaymentForm() {
  return (
    <>
     <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-3">
                            <form class="row g-3" >

                                <div class="col-12">
                                    <input class="form-control"
                                        type="tel"
                                        name="number"
                                        placeholder="Card Number"
                                        
                                        maxlength="16"
                                        pattern="[0-9]+"
                                        
                                        />
                                </div>

                                <div class="col-12">
                                    <div class="row">
                                        <div className="col-6">
                                            <select name="expiry" class="form-select" required >
                                                <option value="">Month</option>
                                                <option value="01">Jan</option>
                                                <option value="02">Feb</option>
                                                <option value="03">Mar</option>
                                                <option value="04">April</option>
                                                <option value="05">May</option>
                                                <option value="06">June</option>
                                                <option value="07">July</option>
                                                <option value="08">Aug</option>
                                                <option value="09">Sep</option>
                                                <option value="10">Oct</option>
                                                <option value="11">Nov</option>
                                                <option value="12">Dec</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <select name="expiry" class="form-select" required >
                                                <option value="">Year</option>
                                                <option value="21">2021</option>
                                                <option value="22">2022</option>
                                                <option value="23">2023</option>
                                                <option value="24">2024</option>
                                                <option value="25">2025</option>
                                                <option value="26">2026</option>
                                                <option value="27">2027</option>
                                                <option value="28">2028</option>
                                                <option value="29">2029</option>
                                                <option value="30">2030</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">

                                    <input class="form-control"
                                        type="tel"
                                        name="cvc"
                                        placeholder="Card CVC"
                                        maxlength="3"
                                        
                                        pattern="\d*"
                                       />

                                </div>

                                <div class="col-12">
                                    <input class="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Card Name"
                                       />
                                </div>

                                <div className="text-center">
                                    <button type="submit" class="btn btn-dark">Pay INR </button>
                                </div>

                            </form >
                        </div>
                    </div>
                </div>
    </>
  )
}

export default PaymentForm