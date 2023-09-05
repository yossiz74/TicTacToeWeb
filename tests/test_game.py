from game import TicTacToe


def test_board_initialization():
    game = TicTacToe()
    expected_board = [
        [None, None, None],
        [None, None, None],
        [None, None, None]
    ]
    assert game.board == expected_board
