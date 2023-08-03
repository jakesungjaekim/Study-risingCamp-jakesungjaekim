import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import { IPhoto } from '../@types/IPhoto'

const RoomsPage = () => {
  const { id } = useParams<{id: string }>()
  const [photo, setPhoto] = useState<IPhoto | null>(null)
  
  const fetchPhoto = async () => {
    const API_KEY = 'nYg5FUscjor5cOFcHxXlNJiNgqiGV0Aef7DyuL3Ya0U';
    const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    setPhoto(response.data)
  }

  useEffect(()=>{
    fetchPhoto()
  },[id])

  console.log(photo)

  return (
    <>
      <div>
        RoomsPage
      </div>
      <div>
        id: {id}
      </div>
      <div>
        {photo?.likes}
      </div>
      <div>
        {photo?.description}
      </div>
      <div>
        {photo?.location.name}
      </div>
      <div>
        {photo?.updated_at}
      </div>
      <div>
        {photo?.urls.regular}
      </div>
    </>
  )
}

export default RoomsPage