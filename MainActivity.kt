package com.example.voca

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.*

class MainActivity : AppCompatActivity() , View.OnClickListener, AdapterView.OnItemClickListener, AdapterView.OnItemLongClickListener {
    companion object{
        var oriVocaArr : ArrayList<Voca> = arrayListOf()
    }

    var editIdx : Int = -1
    var vocaArr : ArrayList<String> = arrayListOf()
//    var engArr : ArrayList<String> = arrayListOf()
//    var korArr : ArrayList<String> = arrayListOf()
    lateinit var btn : Button
    lateinit var engEt : EditText
    lateinit var korEt : EditText
    lateinit var listV : ListView
    lateinit var adapter : ArrayAdapter<String>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        btn = findViewById(R.id.btn)
        engEt = findViewById(R.id.engEt)
        korEt = findViewById(R.id.korEt)
        listV = findViewById(R.id.listV)
        adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, vocaArr)
        listV.adapter = adapter

        btn.setOnClickListener(this)
        listV.onItemClickListener = this
        listV.onItemLongClickListener = this
    }

    fun resetData(){

        vocaArr.clear()
        for (i in 0 until oriVocaArr.size step 1){
            var voca :String
            = oriVocaArr.get(i).eng +"  /  "+ oriVocaArr.get(i).kor
            vocaArr.add(voca)
        }
        adapter.notifyDataSetChanged()
    }

    override fun onClick(p0: View?) {
        var eng: String = engEt.text.toString()
        var kor: String = korEt.text.toString()
        engEt.setText("")
        korEt.setText("")
        if(editIdx != -1){
            var voca :Voca = oriVocaArr.get(editIdx);
            voca.eng = eng
            voca.kor =kor
//            engArr.set(editIdx,eng)
//            korArr.set(editIdx,kor)
            editIdx = -1;
            btn.setText("클릭")
        } else {
            oriVocaArr.add(Voca(eng,kor))
//            engArr.add(eng)
//            korArr.add(kor)
        }

        resetData()
    }

    override fun onItemClick(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {
//        engEt.setText(engArr.get(p2))
//        korEt.setText(korArr.get(p2))
        engEt.setText(oriVocaArr.get(p2).eng)
        korEt.setText(oriVocaArr.get(p2).kor)
        btn.setText("수정")
        editIdx = p2
    }

    override fun onItemLongClick(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long): Boolean {

        return true
    }
}