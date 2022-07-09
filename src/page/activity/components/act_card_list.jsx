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
                <AddCircleOutlineIcon sx={{ color: "gray", fontSize: "70px" }} />
            </Button>
        </Card>
        {
            listData.map((item) => {
                console.log(item)
                const { act_id, act_title, act_Sdate, act_Edate, 
                act_Stime,act_Etime,acr_org,acr_orgimg,act_location,
                act_class,act_guests,act_info,act_img,act_sta,act_is_slider } = item
                return (
                    <ActCard
                        key={act_id}
                        title={act_title}
                        startDate={act_Sdate}
                        endDate={act_Edate}
                        startTime={act_Stime}
                        endTime={act_Etime}
                        organizer={acr_org}
                        organizerImg={acr_orgimg}
                        location={act_location}
                        type={act_class}
                        quests={act_guests}
                        info={act_info}
                        mainImg={act_img}
                        isShow={act_sta}
                        isSlider={act_is_slider}
                        id={act_id}
                    />
                );
            })
        }
    </div>
}

export default CardList