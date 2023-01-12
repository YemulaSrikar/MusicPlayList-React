import {AiOutlineDelete} from 'react-icons/ai'
import {
  MusicList,
  ImgCont,
  Img,
  MusicNamesCont,
  MusicPara1,
  MusicPara,
  DurationDltCont,
  Duration,
  DeleteButton,
  DeleteIcon,
} from './styledComponents'

const MusicListItems = props => {
  const {music, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = music
  const onClickDelete = () => {
    onDeleteSong(id)
  }
  return (
    <MusicList>
      <ImgCont>
        <Img src={imageUrl} alt="track" />
        <MusicNamesCont>
          <MusicPara1>{name}</MusicPara1>
          <MusicPara>{genre}</MusicPara>
        </MusicNamesCont>
      </ImgCont>
      <DurationDltCont>
        <Duration>{duration}</Duration>
        <DeleteButton onClick={onClickDelete} data-testid="delete">
          <DeleteIcon>
            <AiOutlineDelete />
          </DeleteIcon>
        </DeleteButton>
      </DurationDltCont>
    </MusicList>
  )
}
export default MusicListItems
