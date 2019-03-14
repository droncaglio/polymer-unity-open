# polymer-unity-open
Unity WebGL on polymer 3 project 

Scripts in Unity:

//Jslib for UnityWebgl
//We will save this file as *.jslib for using in UNITY
 var PolymerUnityJsLib = {
		
	Message: function(msg){
		
		var message = Pointer_stringify(msg);
		console.log('jslib '+ message);
    
	}
}
mergeInto(LibraryManager.library, PolymerUnityJsLib);


C#

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;

public class PolymerUnity : MonoBehaviour
{
    public Text textReceive;
    public InputField textSend;


    [DllImport("__Internal")]
    private static extern void Message(string msg); //Open tree

    public void MessageToPolymer()
    {
        // Send to jslib the text of the InputField
        Message(textSend.text);
    }

    public void ReceiveFromPolymer(string msg)
    {
        textReceive.text = msg;
    }
}
