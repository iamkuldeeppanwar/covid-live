import React, { Component } from 'react'
import "./Covid.css"
export default class Covid extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        NewConfirmed: "",
                        TotalDeaths: "",
                        TotalConfirmed: "",
                        NewDeaths: "",
                        Country: "",
                        CountryCode: "",
                        newconfirmed: "",
                        newdeaths: "",
                        newrecovered: "",
                        totalconfirmed: "",
                        totaldeaths: "",
                        totalrecovered: "",
                        inputvalue: '',
                }
        }
        search = () => {
                fetch(`https://api.covid19api.com/summary`)
                        .then((data) => {
                                return (data.json())
                        }).then((data) => {
                                this.setState({
                                        NewConfirmed: "NewConfirmed:" + data.Global.NewConfirmed,
                                        TotalDeaths: "TotalDeaths:" + data.Global.TotalDeaths,
                                        TotalConfirmed: "TotalConfirmed:" + data.Global.TotalConfirmed,
                                        NewDeaths: "NewDeaths:" + data.Global.NewDeaths
                        })
                })
        }
        display = () => {
                fetch(`https://api.covid19api.com/summary`)
                        .then((data) => {
                                return (data.json())
                        }).then((data) => {
                                for (var i = 0; i < data.Countries.length; i++) {
                                        var value = data.Countries[i].Country
                                        value = value.toLowerCase();
                                        if (this.state.inputvalue == value) {
                                                this.setState({
                                                        Country: "Country:" + data.Countries[i].Country + "," + data.Countries[i].CountryCode,
                                                        newconfirmed: "NewConfirmed:" + data.Countries[i].NewConfirmed,
                                                        newdeaths: "NewDeaths:" + data.Countries[i].NewDeaths,
                                                        newrecovered: "NewReovered:" + data.Countries[i].NewRecovered,
                                                        totalconfirmed: "TotalConfirmed:" + data.Countries[i].TotalConfirmed,
                                                        totaldeaths: "TotalDeaths:" + data.Countries[i].TotalDeaths,
                                                        totalrecovered: "TotalRecovered" + data.Countries[i].TotalRecovered
                                                })
                                        }
                                }
                        })
        }
        updatevalue = (evt) => {
                this.setState({
                        inputvalue: evt.target.value,
                });
        }
        render() {
                return (
                        <>
                                <div className="container" onLoad={this.search}>
                                        <div className="header">
                                                <ul>
                                                        <li><a class="active" href="#home">Dashboard</a></li>
                                                        <li><a href="#news">News</a></li>
                                                        <li><a href="#contact">Contact</a></li>
                                                        <li><a href="#about">About</a></li>
                                                </ul>
                                        </div>
                                        <div className=" corona-image">
                                                <h1 className=" Responding">Responding to COVID-19</h1>
                                                <p id="a">In the face of this unprecedented pandemic,
                                                        Gavi is working<br />with countries to support COVID-19
                                                        response and to maintain<br /> and restore routine immunisation.
                                                        The Alliance is also co-leading<br /> global efforts on equitable
                                                        access to COVID-19 vaccines.</p>
                                        </div><br />
                                        <div className="input">
                                                <input id="int" type="text" value={this.state.inputvalue} onChange={evt => this.updatevalue(evt)} placeholder="search your country data" />
                                                <button className="btn1" onClick={this.display}>Search</button>
                                        </div>
                                        <div className="country-data">
                                                <div className="div1">{this.state.Country}{this.state.CountryCode}</div>
                                                <div className="div2">{this.state.newconfirmed}</div>
                                                <div className="div3">{this.state.newdeaths}</div>
                                                <div className="div4">{this.state.newrecovered}</div>
                                                <div className="div5">{this.state.totalconfirmed}</div>
                                                <div className="div6">{this.state.totaldeaths}</div>
                                                <div className="div7">{this.state.totalrecovered}</div>
                                        </div>
                                        <div className="Response-VACCINES">
                                                <div className=" Response"><hr class="new4" /><br />
                                                        <h3>GAVI'S RESPONSE</h3>
                                                        <p>Respond and protect: With COVID-19 now reported in almost all Gavi-eligible countries, the Vaccine Alliance is providing immediate funding to health systems, enabling countries to protect health care workers, perform vital surveillance and training, and purchase diagnostic tests.</p>
                                                        <p>Maintain, restore and strengthen: Gavi will support countries to adapt and restart immunisation services, rebuild community trust and catch up those who have been missed both before and during the pandemic, while also investing in strengthening immunisation systems to be more resilient and responsive to the communities they serve.</p>
                                                        <p>Ensure global equitable access: Gavi is co-leading COVAX, the global effort to securing a global response to COVID-19 that is effective and fair, using its unique expertise to help identify and rapidly accelerate development, production and delivery of COVID-19 vaccines so that anyone that needs them, gets them.</p>
                                                </div>
                                                <div className="VACCINES"><hr class="new4" /><br />
                                                        <h3>COVID-19 VACCINES</h3>
                                                        <p>Accurate, evidence-based information about COVID-19 vaccines.</p>
                                                        <button id="btn">LEARN MORE ➢</button><br />
                                                        <h3>SITUATION REPORTS</h3><hr class="new4" /><br />
                                                        <p>Historical updates concerning the impact of and response to the COVID-19 pandemic in Gavi-supported countries.</p>
                                                </div>
                                        </div>
                                        <div className="upper-image">
                                                <div className="image-txt">
                                                        <h1 className="covax">COVAX</h1>
                                                        <p>Gavi is co-leading COVAX, the vaccines pillar of the Access to COVID-19 Tools (ACT) Accelerator. This involves coordinating the COVAX Facility, a global risk-sharing mechanism for pooled procurement and equitable distribution of eventual COVID-19 vaccines.</p>
                                                        <button id="btn">LEARN MORE ➢</button>
                                                </div>
                                                <div className="img">
                                                        <img id="LG" src="https://www.gavi.org/sites/default/files/2020-09/covax-banner-half-2.jpg" />
                                                </div>
                                        </div><br />
                                        <div className="global-data">
                                                <div className="totalconfirm">
                                                        <h2>{this.state.TotalConfirmed}</h2>
                                                        <h4>{this.state.NewConfirmed}</h4>
                                                </div>
                                                <div className="totaldeath">
                                                        <h2>{this.state.TotalDeaths}</h2>
                                                        <h4>{this.state.NewDeaths}</h4>
                                                </div>
                                        </div>
                                        <div className="Subscribe">
                                                <h1>Subscribe to our newsletter & get notification</h1>
                                                <input id="subs" type="text" placeholder="Subscribe to our newsletter & get notification" />
                                                <button id="btn">Subscribe</button>
                                        </div>
                                        <p id="p">For contact us:</p>
                                        <div className="footer2">
                                                <a href="#" class="fa fa-facebook"></a>
                                                <a href="#" class="fa fa-linkedin"></a>
                                                <a href="#" class="fa fa-github"></a>
                                        </div>
                                </div>
                        </>
                )
        }
}
