(function() {
	"use strict";
	
	exports.CONFIGURE_GAME_TITLE = 'Monopoly - game configuration';
	
	// Buttons
	exports.BUTTON_NEW_GAME = 'Novo Jogo';
	exports.BUTTON_START_GAME = 'Iniciar Jogo';
	exports.BUTTON_ADD_PLAYER = 'Adicionar Jogador';
	
	// Choices
	exports.CHOICE_ROLL_DICE = 'Roll the dice';
	exports.CHOICE_FINISH_TURN = 'Fim de Turno';
	exports.CHOICE_BUY_PROPERTY = 'Buy {property} for {price}';
	exports.CHOICE_PAY_RENT = 'Pague {rent} para {toPlayer}';
	exports.CHOICE_GO_BANKRUPT = 'Falido';
	exports.CHOICE_PAY_TAX = 'Pague {amount} de imposto';
	exports.CHOOSE_FLAT_TAX = 'Choose a flat {amount} imposto';
	exports.CHOOSE_PERCENTAGE_TAX = 'Choose a {percentage}% imposto';
	exports.CHOICE_CALCULATE_DICE_RENT = 'Jogue os dados e pague um aluguel de {multiplier} vezes o resultado';
	exports.CHOICE_TRADE = "Trade with {player}";
	exports.TRADE_MAKE_OFFER = "Make this offer";
	exports.TRADE_CANCEL = "Cancel trade";
	exports.CHOICE_ACCEPT_OFFER = "Accept offer";
	exports.CHOICE_REJECT_OFFER = "Reject offer";
	exports.CHOICE_GO_TO_JAIL = "Go to jail";
	exports.CHOICE_PAY_DEPOSIT = "Pay a {money} deposit to get out of jail";
	exports.CHOICE_TRY_DOUBLE_ROLL = "Try to roll a double to get out of jail";
	
	// Log messages
	exports.LOG_DICE_ROLL = '{player} rolled a {die1} and a {die2}';
	exports.LOG_DOUBLE_DICE_ROLL = '{player} rolled a double of {dice}';
	exports.LOG_PROPERTY_BOUGHT = '{player} bought {property}';
	exports.LOG_RENT_PAID = '{fromPlayer} paid {amount} to {toPlayer}';
	exports.LOG_SALARY = "{player} passed GO and received $200";
	exports.LOG_TAX_PAID = "{player} paid a {amount} tax";
	exports.LOG_OFFER_MADE = "{player1} offered {player2} : {offer1} for {offer2}";
	exports.LOG_OFFER_ACCEPTED = "The offer has been accepted";
	exports.LOG_CONJUNCTION = 'and';
	exports.LOG_OFFER_REJECTED = "The offer has been rejected";
	exports.LOG_GONE_TO_JAIL = "{player} went to jail";
	exports.LOG_GONE_BANKRUPT = "{player} has gone bankrupt";
	exports.LOG_GAME_WON = "{player} has won the game";
	
	// Squares
	exports.CHANCE = 'Chance';
	exports.COMMUNITY_CHEST = 'Community Chest';
	exports.INCOME_TAX = 'Income Tax';
	exports.LUXURY_TAX = 'Luxury Tax';
	exports.LUXURY_TAX_DESCRIPTION = "Pay $75";
	exports.INCOME_TAX_DESCRIPTION = "Pay 10% or $200";
	exports.START_DESCRIPTION = "Collect $200 salary as you pass";
	exports.VISITING_JAIL = "Just visiting";
	exports.FREE_PARKING = "Free parking";
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
	exports.DEFAULT_PLAYER_NAME = 'Player {index}';
	
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