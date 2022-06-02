import {default as Bg} from '../asset/content.png'

const DashboardStyle = (theme) => ({
    main: {
        background: 'url('+Bg+')',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
    },
    navbar: {
        margin: 20,
        padding: 10
    },
   
})

export default DashboardStyle