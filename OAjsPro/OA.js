document.onload = function(){AP()}
function AP(selector) {
    var self = document.querySelector(selector);
    self.text = function(text){
        if(text){
            self.innerText = text;
            return self;
        }
        return self.innerText;
    }
    self.html = function(html){
        if(html){
            self.innerHTML = html;
            return self;
        }
        return self.innerHTML;
    }
    self.css = function(styles){
        for(let key in styles){
            self.style[key] = styles[key];
        }
    }

    self.val = function(inpVal){
        if(inpVal){
            self.value = inpVal;
            return self;
        }
        return self.value;
    }
    self.attr = function(name, value){
        if (!value) {
            var n = self.getAttribute(name);
            return n;
        }
        var n = self.setAttribute(name, value);
        return n;
    }
    self.on = function(event, callback){
        var E = self.addEventListener(event, callback);
        return E;
    }
    self.show = function(bool){
        if(bool == false){
            self.style.display = "none";
            return self;
        }
        else
            return self;
    }
    self.showToggle = function(){
        if (self.style.display === "none") {
            self.style.display = "block";
          } else {
            self.style.display = "none";
          }
    }
    return self;
}
// AP Attributes
function apAttrs(){
    var color = getAttribute
}