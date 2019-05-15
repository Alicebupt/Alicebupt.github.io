/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
mingyan.push("{'index':1,'content':'我觉得世界上所有事情都在你没有准备好的时候，就开始；在你准备好的时候，就结束了。</br> - </br>《年华似水》'}");
mingyan.push("{'index':2,'content':'和很多人告别时，我都会说后会无期，我总觉得有期只是约好了一个久远的时间，而无期也许就会是下一分钟相见。</br> - </br>韩寒'}");
mingyan.push("{'index':3,'content':'不到园林，怎知春色几许？</br> - </br>《牡丹亭》'}");
mingyan.push("{'index':4,'content':'人如果总逃避的话，眼神会先于生命失去光彩的。</br> - </br>《尽管如此，也要活下去》'}");
mingyan.push("{'index':5,'content':'小小羚羊过山冈，九根马尾渡江。想想大地上一石一鸟都不可乱放。有人喊过一嗓。</br> - </br>张子选《藏北三行诗》'}");
mingyan.push("{'index':6,'content':'一个人做的梦，就只能是个梦；一群人怀着同一个梦想，便是真实。 </br> - </br>约翰·列侬'}");
mingyan.push("{'index':7,'content':'我们一路奋战，不是为了改变世界，而是不让世界改变我们。</br> - </br>《熔炉》'}");
mingyan.push("{'index':8,'content':'再见，再次见到。嘿，朋友，我们又见面了。</br> - </br>小饭'}");
mingyan.push("{'index':9,'content':'留下来，或者我跟你走。</br> - </br>《海角七号》'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
  var item = getItem();
  return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}