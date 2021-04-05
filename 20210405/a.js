function doA() {
    alert('test');
}

class AA {
    doA() {
        alert('doA')
    }
    doB() {
        alert('doB')
    }
}

class AAB extends AA {

}