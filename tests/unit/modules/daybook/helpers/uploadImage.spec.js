import cloudinary from 'cloudinary'

import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'

cloudinary.config({
    cloud_name: 'orlinalvarado',
    api_key: '526958464121662',
    api_secret: 'JwoqfQ3GjBYUKD0T2bfZoCypeww'
})



describe('Prueba en el uploadImage', () => {
    test('debe de cargar un archivo y retornar el url', async( done ) => {
        const { data } = await axios.get('https://res.cloudinary.com/orlinalvarado/image/upload/v1632321908/fpkbtptfdunkqi72c4x0.jpg', {
            responseType: 'arraybuffer'
        })
        
        const file = new File([data], 'foto.jpg')
        
        const url = await uploadImage( file )
        
        expect( typeof url ).toBe('string')
        
        //Tomar el ID
        const segments  = url.split('/')
        const imageId = segments[ segments.length -1 ].replace('.jpg', '')
        
        cloudinary.v2.api.delete_resources( imageId, () => {
            done()
        })
        
    })
    
})
