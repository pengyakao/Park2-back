import ReactDOM from "react-dom";
import "./UploadMore.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// test
import {
  getStoreImgs,
  postStoreImgs,
  editStoreImgs,
} from "../../api/test/uploadImgApi";
// test

const Input = styled("input")({
  display: "none",
});

class UploadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      no_image: "https://www.freeiconspng.com/uploads/no-image-icon-6.png",
      files: [],
      originalFiles: [],
      submitFiles: [],
    };
    this.inputRef = React.createRef();
  }

  // 建立新增/保留/刪除的陣列
  handleSubmit = () => {
    // console.log(this.state.files, this.state.originalFiles)
    let newFile = this.state.files.filter((e) => {
      return !this.state.originalFiles.find((j) => j == e.imagePreviewUrl);
    });
    let newFileArr = newFile.map((e) => {
      return e.file;
    });
    let deleteFile = this.state.originalFiles.filter((e) => {
      return this.state.files.every((j) => j.imagePreviewUrl != e);
    });
    let stayFileArr = this.state.originalFiles.filter((e) => {
      return !deleteFile.find((j) => j == e);
    });

    // console.log(newFileArr, deleteFile, stayFileArr);

    const formData = new FormData();
    formData.append("id", this.props.i);

    newFileArr.forEach((e) => {
      console.log(e);
      formData.append("files", e);
    });

    formData.append("delete", JSON.stringify(deleteFile));
    formData.append("stay", JSON.stringify(stayFileArr));

    // set formData
    this.props.setmoreImgFormData(formData);
  };

  uploadItem = (e) => {
    const cnt = this.state.files.length;
    if (cnt < 10) {
      e.preventDefault();
      let files = e.target.files;
      console.log("files", files);
      const reader = new FileReader();
      for (const element of files) {
        reader.onloadend = () => {
          this.setState(
            {
              files: [
                ...this.state.files,
                {
                  id: element.size,
                  file: element,
                  imagePreviewUrl: reader.result,
                },
              ],
            },
            () => {
              console.log('files', this.state.files);
            //   呼叫函式組成所需陣列
              this.handleSubmit();
            }
          );
        };
        reader.readAsDataURL(element);
      }
    } else {
      alert("照片上限為10張");
    }
  };

  removeItem = (event) => {
    let id = event.target.id;
    // const id = Number(event.target.id)
    console.log(id);
    this.setState({
      files: [...this.state.files.filter((obj) => obj.id != id)],
    }, ()=>{
      this.handleSubmit();
    });
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <div className="Upload">
        {/* <h1>多張輪片上傳</h1> */}

        <div className="imgContainer">
          {!this.state.files.length ? (
            <img src={this.state.no_image} alt="No Image" />
          ) : (
            this.state.files.map((obj, k) => (
              <div className="imgWrapper">
                <img src={obj.imagePreviewUrl} alt={obj.id} key={k} />
                <button type="button" onClick={this.removeItem} id={obj.id}>
                  &times;
                </button>
              </div>
            ))
          )}
        </div>
        <label>
          <Stack spacing={2} direction="row" justifyContent="center" margin={2}>
            <div>
              <Input
                type="file"
                onChange={
                  this.uploadItem}
                ref={this.inputRef}
                accept="image/*"
              />
              <Button variant="outlined" component="span">
                選擇檔案
              </Button>
            </div>
            {/* <Button variant="contained">上傳</Button> */}
          </Stack>
        </label>
        {/* <div
          style={{
            border: "solid 2px #000",
            display: "inline-block",
            borderRadius: "5px",
            padding: "5px 10px",
            fontWeight: "900",
          }}
          onClick={() => {
            this.handleSubmit();
          }}
        >
          Test
        </div> */}
      </div>
    );
  }
  componentDidMount = () => {
    const that = this;

    getStoreImgs(this.props.i).then((result) => {
      if (result[0].sto_img_url) {
        that.state.originalFiles = result[0].sto_img_url.split(",");
        let imgArr = result[0].sto_img_url.split(",").map((e) => {
          return {
            id: e,
            imagePreviewUrl: e,
          };
        });

        let imgs = imgArr.filter((e) => e.id != "");

        that.setState({
          files: imgs,
        }, ()=>{
          this.handleSubmit();
        });
      }
    });
  };
}

export default UploadMore;
