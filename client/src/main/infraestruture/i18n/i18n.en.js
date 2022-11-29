(function() {
	"use strict";
	
	exports.CONFIGURE_GAME_TITLE = 'Monopoly - game configuration';
	
	// Buttons
	exports.BUTTON_NEW_GAME = 'Novo Jogo';
	exports.BUTTON_START_GAME = 'Iniciar Jogo';
	exports.BUTTON_ADD_PLAYER = 'Adicionar Jogador';
	
	// Choices
	exports.CHOICE_ROLL_DICE = 'Jogar Dados';
	exports.CHOICE_FINISH_TURN = 'Terminar Turno';
	exports.CHOICE_BUY_PROPERTY = 'Comprar {property} por {price}';
	exports.CHOICE_PAY_RENT = 'Pague {rent} para {toPlayer}';
	exports.CHOICE_GO_BANKRUPT = 'Falido';
	exports.CHOICE_PAY_TAX = 'Pague {amount} de imposto';
	exports.CHOOSE_FLAT_TAX = 'Choose a flat {amount} imposto';
	exports.CHOOSE_PERCENTAGE_TAX = 'Choose a {percentage}% imposto';
	exports.CHOICE_CALCULATE_DICE_RENT = 'Jogue os dados e pague um aluguel de {multiplier} vezes o resultado';
	exports.CHOICE_TRADE = "Negociar com {player}";
	exports.TRADE_MAKE_OFFER = "Fazer Oferta";
	exports.TRADE_CANCEL = "Cancelar troca";
	exports.CHOICE_ACCEPT_OFFER = "Aceitar Oferta";
	exports.CHOICE_REJECT_OFFER = "Rejeitar Oferta";
	exports.CHOICE_GO_TO_JAIL = "Vá para a prisão";
	exports.CHOICE_PAY_DEPOSIT = "Faça um depósito de {money} para sair da prisão";
	exports.CHOICE_TRY_DOUBLE_ROLL = "Tente dois números iguais para sair da prisão";
	
	// Log messages
	exports.LOG_DICE_ROLL = '{player} jogou um {die1} e um {die2}';
	exports.LOG_DOUBLE_DICE_ROLL = '{player} jogou e os dois deram {dice}';
	exports.LOG_PROPERTY_BOUGHT = '{player} comprou {property}';
	exports.LOG_RENT_PAID = '{fromPlayer} pagou {amount} para {toPlayer}';
	exports.LOG_SALARY = "{player} passou pelo GO e recebeu $200";
	exports.LOG_TAX_PAID = "{player} pagou {amount} de imposto";
	exports.LOG_OFFER_MADE = "{player1} offered {player2} : {offer1} for {offer2}";
	exports.LOG_OFFER_ACCEPTED = "A oferta foi aceita";
	exports.LOG_CONJUNCTION = 'e';
	exports.LOG_OFFER_REJECTED = "A oferta foi rejeitada";
	exports.LOG_GONE_TO_JAIL = "{player} foi para a prisão";
	exports.LOG_GONE_BANKRUPT = "{player} faliu";
	exports.LOG_GAME_WON = "{player} ganhou o jogo";
	
	// Squares
	exports.CHANCE = 'Chance';
	exports.COMMUNITY_CHEST = 'Baú da Comunidade';
	exports.INCOME_TAX = 'Imposto de Renda';
	exports.LUXURY_TAX = 'Imposto de Luxo';
	exports.LUXURY_TAX_DESCRIPTION = "Pague $75";
	exports.INCOME_TAX_DESCRIPTION = "Pague 10% ou $200";
	exports.START_DESCRIPTION = "Passe pelo GO e receba $200";
	exports.VISITING_JAIL = "Visitando a Prisão";
	exports.FREE_PARKING = "Estacionamento Gratuito";
	exports.GO_TO_JAIL = "Vá para prisao";
	
	exports.COMPANY_WATER = 'Companhia de agua';
	exports.COMPANY_ELECTRIC = "Companhia Eletrica";
	
	exports.RAILROAD_READING = 'Reading Railroad';
	exports.RAILROAD_PENN = 'Pennsylvania Railroad';
	exports.RAILROAD_B_O = 'B.& O. Railroad';
	exports.RAILROAD_SHORT = 'Short line';
	
	exports.PROPERTY_MD = 'Mediterranean Avenue';
	exports.PROPERTY_BT = 'Baltic Avenue';
	exports.PROPERTY_ET = "Oriental Avenue";
	exports.PROPERTY_VT = 'Vermont Avenue';
	exports.PROPERTY_CN = 'Connecticut Avenue';
	exports.PROPERTY_CL = 'St.Charles Place';
	exports.PROPERTY_US = 'States Avenue';
	exports.PROPERTY_VN = 'Virginia Avenue';
	exports.PROPERTY_JK = 'St.James Place';
	exports.PROPERTY_TN = 'Tennessee Avenue';
	exports.PROPERTY_NY = 'New York Avenue';
	exports.PROPERTY_KT = 'Kentucky Avenue';
	exports.PROPERTY_IN = 'Indiana Avenue';
	exports.PROPERTY_IL = 'Illinois Avenue';
	exports.PROPERTY_AT = 'Atlantic Avenue';
	exports.PROPERTY_VR = 'Ventnor Avenue';
	exports.PROPERTY_MN = 'Marvin Gardens';
	exports.PROPERTY_PA = 'Pacific Avenue';
	exports.PROPERTY_NC = 'North Carolina Avenue';
	exports.PROPERTY_PN = 'Pennsylvania Avenue';
	exports.PROPERTY_PK = 'Park Place';
	exports.PROPERTY_BW = 'Boardwalk';
	
	// Player name
	exports.DEFAULT_PLAYER_NAME = 'Jogador {index}';
	
	// Player types
	exports.PLAYER_TYPE_HUMAN = 'Jogador';
	exports.PLAYER_TYPE_COMPUTER = 'Computador';
	
	// Price formatting
	exports.PRICE_STRING = 'Preço {price}';
	exports.formatPrice = function (price) {
		return '$' + price;
	};
	
	// Trade
	exports.TRADE_TITLE = "Troca";
}());