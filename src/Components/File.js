import { NativeBaseProvider, View } from 'native-base';
import React from 'react';
import '../App.css'
const File=()=>{
    return(
        <div className='file-div'>
            <div className='file-name-div'>
                <h1>Add Files</h1>
                <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-add-file-interface-kiranshastry-solid-kiranshastry.png"
                    className='image'
                />
            </div>
              {/* <NativeBaseProvider>
                <View style={{
                    width:500,
                    height:400,
                    backgroundColor:'white',
                    borderRadius:10
                }}>

                </View>
            </NativeBaseProvider>  */}
        </div>
    )
}
export default File;