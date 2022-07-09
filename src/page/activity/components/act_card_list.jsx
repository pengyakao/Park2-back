import ActCard from "./act_card"
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import './UploadCard.css'

const CardList = ({ listData }) => {

    const addAct = () => {
        window.location.href = `/activity/act_new`;
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
                const { act_id, act_title, act_img, act_sta } = item
                return (
                    <ActCard
                        key={act_id}
                        id={act_id}
                        name={act_title}
                        img={act_img}
                        hidden={act_sta}
                    />
                );
            })
        }
    </div>
}

export default CardList