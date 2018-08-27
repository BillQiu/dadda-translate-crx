import { TR_ID_PREFIX } from '@/utils/constants'

export default (word, message) => {
  const options = {
    iconUrl: 'http://p5grwrmf4.bkt.clouddn.com/dadda-ico.png',
    type: 'basic',
    title: word,
    message,
    priority: 2,
    eventTime: Date.now() + 1000000,
    buttons: [
      {
        title: '😏 我已经会这个单词了!'
      }
    ]
  }
  chrome.notifications.clear(TR_ID_PREFIX + word)

  chrome.notifications.create(TR_ID_PREFIX + word, options)
}
