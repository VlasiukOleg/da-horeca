export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig(event)

  const { telegramBotToken, telegramChatId } = config

  if (!telegramBotToken || !telegramChatId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Telegram configuration is missing on the server.',
    })
  }

  // Formatting the message
  let message = `🔥 <b>Нова заявка з сайту Horeca Da!</b>\n\n`
  message += `👤 <b>Ім'я:</b> ${body.name || 'Не вказано'}\n`
  message += `📞 <b>Телефон:</b> ${body.phone}\n`
  message += `💼 <b>Послуга:</b> ${body.service || 'Не вказано'}\n`
  
  if (body.company) {
    message += `🏢 <b>Компанія:</b> ${body.company}\n`
  }

  const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`

  try {
    const response = await $fetch(telegramApiUrl, {
      method: 'POST',
      body: {
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'HTML',
      }
    })

    return { success: true, message: 'Form submitted successfully' }
  } catch (error) {
    console.error('Error sending message to Telegram:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message to Telegram.',
    })
  }
})
