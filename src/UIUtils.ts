import Dialog from './Dialog';
import * as $  from 'jquery';

export default /**
 * UIUtils
 */
class UIUtils {
   
    public static ShowDialog(heading:string, content:string){
        let dialog = new Dialog();
        let element = document.createElement('div');
        element.innerHTML = dialog.GetHTML(heading, content);    
        document.getElementById('dialog-preview').appendChild(element);
        
        $('#dialog-preview .btn-action-positive').on('click', (e)=>{            
            $(element).remove();
        });
        
        $('#dialog-preview .btn-action-negetive').on('click', (e)=>{
            $(element).remove();
        }); 
        
    }
}