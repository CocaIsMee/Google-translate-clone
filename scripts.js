document.getElementById('swap-languages').addEventListener('click', function () {
    const inputLanguage = document.getElementById('input-language');
    const outputLanguage = document.getElementById('output-language');

    const temp = inputLanguage.value;
    inputLanguage.value = outputLanguage.value;
    outputLanguage.value = temp;

    translateText(); // Dịch lại văn bản khi đổi ngôn ngữ
});

document.getElementById('input-text').addEventListener('input', translateText);

function translateText() {
    const inputText = document.getElementById('input-text').value.trim();
    const inputLanguage = document.getElementById('input-language').value;
    const outputLanguage = document.getElementById('output-language').value;

    // Bộ từ điển mẫu để dịch
    const dictionary = {
        'anh yêu em': 'i love you',
        'i love you': 'anh yêu em',
        'xin chào': 'hello',
        'hello': 'xin chào',
        'tạm biệt': 'goodbye',
        'goodbye': 'tạm biệt',
        'cảm ơn': 'thank you',
        'thank you': 'cảm ơn',
        'làm ơn': 'please',
        'please': 'làm ơn',
        'chúc mừng': 'congratulations',
        'congratulations': 'chúc mừng',
        'chúc ngủ ngon': 'good night',
        'good night': 'chúc ngủ ngon',
        'chào buổi sáng': 'good morning',
        'good morning': 'chào buổi sáng',
        'chào buổi chiều': 'good afternoon',
        'good afternoon': 'chào buổi chiều',
        'chào buổi tối': 'good evening',
        'good evening': 'chào buổi tối',
        'bạn khỏe không?': 'how are you?',
        'how are you?': 'bạn khỏe không?',
        'tôi khỏe, cảm ơn': 'i am fine, thank you',
        'i am fine, thank you': 'tôi khỏe, cảm ơn',
        'hẹn gặp lại': 'see you again',
        'see you again': 'hẹn gặp lại'
    };

    let translatedText = 'Translation not available';

    if (inputLanguage !== outputLanguage) {
        if (inputLanguage === 'Việt' && outputLanguage === 'Anh') {
            translatedText = dictionary[inputText] || 'Translation not available';
        } else if (inputLanguage === 'Anh' && outputLanguage === 'Việt') {
            translatedText = Object.keys(dictionary).find(key => dictionary[key].toLowerCase() === inputText.toLowerCase()) || 'Translation not available';
        }
    }

    document.getElementById('output-text').value = translatedText;
}
