import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import { IPhoto } from '../../@types/IPhoto'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from './Map'

const Room = () => {
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

  // console.log(photo?.location.position)

  return (
    <div className='w-full h-screen'>
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
      <Wrapper apiKey='AIzaSyCZQOieg5k3oSFDe_AVtqmHCqs3ar2_NLM'>
        <Map />
      </Wrapper>
    </div>
  )
}

export default Room