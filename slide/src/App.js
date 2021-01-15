import React from "react"
const App1 = React.lazy(()=>import("remote/App"))

let App = () => {
    return (
        <div>
            <h3>我是slide项目的内容</h3>
            <React.Suspense fallback="Loading app">
                <App1></App1>
            </React.Suspense>
        </div>
    )
}
export default App;