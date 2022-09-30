function Spinner() {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
            <rect x="17.5" y="30" width="15" height="40" fill="#9f0013">
            <animate attributeName="y" repeatCount="indefinite" dur="0.6578947368421053s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.13157894736842105s"></animate>
            <animate attributeName="height" repeatCount="indefinite" dur="0.6578947368421053s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.13157894736842105s"></animate>
            </rect>
            <rect x="42.5" y="30" width="15" height="40" fill="#232222">
            <animate attributeName="y" repeatCount="indefinite" dur="0.6578947368421053s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.06578947368421052s"></animate>
            <animate attributeName="height" repeatCount="indefinite" dur="0.6578947368421053s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.06578947368421052s"></animate>
            </rect>
            <rect x="67.5" y="30" width="15" height="40" fill="#5c5c5c">
            <animate attributeName="y" repeatCount="indefinite" dur="0.6578947368421053s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
            <animate attributeName="height" repeatCount="indefinite" dur="0.6578947368421053s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
            </rect>
            </svg>
        )
    }


export default Spinner;