import ActCard from "./home_act_card"
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import './UploadCard.css'



const CardList = ({ listData }) => {

    const addAct = () => {
        window.location.href = `/home/act_new`;
    }

    console.log('listData', listData)

    return <div style={{ "display": "flex", "flex-wrap": "wrap" }}>
        <Card sx={{
            minWidth: 247, minHeight: 218, border: '0px solid #F4F4F4',
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            "margin": "15px"
        }} onClick={addAct}>
            <Button id="uploadIcon" sx={{ minWidth: 247, minHeight: 218 }}>
                <AddCircleOutlineIcon sx={{ color: "gray" ,fontSize: "70px"}} />
            </Button>
        </Card>
        {
            listData.map((item) => {
                console.log(item)
                const { id, name, img, hidden } = item
                return (
                    <ActCard
                        key={id}
                        id={id}
                        name={name}
                        img={img}
                        hidden={hidden}
                    />
                );
            })
        }
    </div>
}


export default CardList