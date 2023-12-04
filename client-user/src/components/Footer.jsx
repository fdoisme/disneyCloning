import disney from "../assets/disney.png"

export default function Footer() {
    return (
        <>
            <div className="container-footer">
                <img src={disney} alt="" className="logo-image" />
                <div style={{ display: "flex", gap: "20px" }}>
                    <div>DISNEY+ HOTSTAR</div>
                    <div>SHOP</div>
                    <div>MOVIES</div>
                    <div>PARKS</div>
                    <div>DISNEY 100</div>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div className="static-footer">About Disney</div>
                    <div className="static-footer">Support</div>
                    <div className="static-footer">Careers</div>
                    <div className="static-footer">Term of Use</div>
                    <div className="static-footer">Supplemental Privacy Policy for Indonesia</div>
                    <div className="static-footer">Privacy Policy</div>
                    <div className="static-footer">Interest-Based Ads</div>
                </div>
                <div className="static-footer">©Disney ©Disney/Pixar © ™ Lucasfilm Ltd. © Marvel, Disney Entertainment</div>
            </div>
        </>
    )
}