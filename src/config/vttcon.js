export default function vttcon(raw){
    if (raw == null){
        return null
    }
	if (raw.substr(0,6) !== 'WEBVTT')
		throw new TypeError('data does not look like webvtt');
	var vtt = raw.replace('\r', '').trim();
	// console.log(vtt)
	var data = '1\n' + vtt.substr(vtt.indexOf('\n\n')+2); // get past the blank line and get the 1 started
	// console.log(data)
	var i = 1; // iterate the sub numbers
	console.log(raw)
	console.log(raw.replace(/\n\n/g , ''))
	return raw.replace(/\n\n/g , '')
	return data.replace(/\n\n/g, str => '\n\n' + (++i) + '\n'); // add the numbers at new lines
}