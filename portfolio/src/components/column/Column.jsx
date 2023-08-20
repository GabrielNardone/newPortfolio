import "./column.css"

export const Column = () => {
    return (
        <div className="divColumn">

            <div className="cl1"></div>
            <div className="cl2"></div>
            <div className="cl3"></div>
            <div className="vertical1">
                <div style={{width: 5}}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div style={{width: 5}}></div>
            </div>
            <div className="cl4"></div>
            <div className="cl5"></div>
            <div className="cl4"></div>
            <div className="vertical2">
                <div style={{width: 5}}></div>
                <div style={{height: 200}}></div>
                <div style={{height: 220}}></div>
                <div style={{height: 250}}></div>
                <div style={{height: 220}}></div>
                <div style={{height: 200}}></div>
                <div style={{width: 5}}></div>
            </div>

        </div>
    )
}
