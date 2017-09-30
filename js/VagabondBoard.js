// Vagabond Board

function Board() {
	this.size = new RowAndColumn(17, 17);
	this.cells = this.brandNew();

	this.winners = [];

	this.hlPlayed = false;
	this.glPlayed = false;
}

Board.prototype.brandNew = function () {
	var cells = [];

	cells[0] = this.newRow(9, 
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.gate(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[1] = this.newRow(11, 
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.redWhiteNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(), 
		BoardPoint.neutral()
		]);

	cells[2] = this.newRow(13, 
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.whiteNeutral(), 
		BoardPoint.redWhite(),
		BoardPoint.redNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[3] = this.newRow(15,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.whiteNeutral(), 
		BoardPoint.white(),
		BoardPoint.redWhite(),
		BoardPoint.red(),
		BoardPoint.redNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[4] = this.newRow(17,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.whiteNeutral(), 
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.redWhite(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.redNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[5] = this.newRow(17,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.whiteNeutral(), 
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.redWhite(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.redNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[6] = this.newRow(17,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.whiteNeutral(), 
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.redWhite(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.redNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[7] = this.newRow(17,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.whiteNeutral(), 
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.redWhite(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.redNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[8] = this.newRow(17,
		[BoardPoint.gate(),
		BoardPoint.redWhiteNeutral(), 
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhite(),
		BoardPoint.redWhiteNeutral(),
		BoardPoint.gate()
		]);

	cells[9] = this.newRow(17,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.redNeutral(), 
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.redWhite(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.whiteNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[10] = this.newRow(17,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.redNeutral(), 
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.redWhite(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.whiteNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[11] = this.newRow(17,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.redNeutral(), 
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.redWhite(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.whiteNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[12] = this.newRow(17,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.redNeutral(), 
		BoardPoint.red(),
		BoardPoint.red(),
		BoardPoint.redWhite(),
		BoardPoint.white(),
		BoardPoint.white(),
		BoardPoint.whiteNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[13] = this.newRow(15,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.redNeutral(), 
		BoardPoint.red(),
		BoardPoint.redWhite(),
		BoardPoint.white(),
		BoardPoint.whiteNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[14] = this.newRow(13,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.redNeutral(), 
		BoardPoint.redWhite(),
		BoardPoint.whiteNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[15] = this.newRow(11,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.redWhiteNeutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	cells[16] = this.newRow(9,
		[BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.gate(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral(),
		BoardPoint.neutral()
		]);

	for (var row = 0; row < cells.length; row++) {
		for (var col = 0; col < cells[row].length; col++) {
			cells[row][col].row = row;
			cells[row][col].col = col;
		}
	}

	return cells;
};

Board.prototype.newRow = function(numColumns, points) {
	var cells = [];

	var numBlanksOnSides = (this.size.row - numColumns) / 2;

	var nonPoint = new BoardPoint();
	nonPoint.addType(NON_PLAYABLE);

	for (var i = 0; i < this.size.row; i++) {
		if (i < numBlanksOnSides) {
			cells[i] = nonPoint;
		} else if (i < numBlanksOnSides + numColumns) {
			if (points) {
				cells[i] = points[i - numBlanksOnSides];
			} else {
				cells[i] = nonPoint;
			}
		} else {
			cells[i] = nonPoint;
		}
	}

	return cells;
};

Board.prototype.placeTile = function(tile, notationPoint, extraBoatPoint) {
	this.putTileOnPoint(tile, notationPoint);

	if (tile.code === 'L') {
		if (tile.ownerName === HOST) {
			this.hlPlayed = true;
		} else {
			this.glPlayed = true;
		}
	}

	// Things to do after a tile is placed
	this.setPointFlags();
};

Board.prototype.putTileOnPoint = function(tile, notationPoint) {
	var point = notationPoint.rowAndColumn;
	point = this.cells[point.row][point.col];
	
	point.putTile(tile);
};

Board.prototype.getSurroundingRowAndCols = function(rowAndCol) {
	var rowAndCols = [];
	for (var row = rowAndCol.row - 1; row <= rowAndCol.row + 1; row++) {
		for (var col = rowAndCol.col - 1; col <= rowAndCol.col + 1; col++) {
			if ((row !== rowAndCol.row || col !== rowAndCol.col)	// Not the center given point
				&& (row >= 0 && col >= 0) && (row < 17 && col < 17)) {	// Not outside range of the grid
				var boardPoint = this.cells[row][col];
				if (!boardPoint.isType(NON_PLAYABLE)) {	// Not non-playable
					rowAndCols.push(new RowAndColumn(row, col));
				}
			}
		}
	}
	return rowAndCols;
};

Board.prototype.getAdjacentRowAndCols = function(rowAndCol) {
	var rowAndCols = [];

	if (rowAndCol.row > 0) {
		rowAndCols.push(this.cells[rowAndCol.row - 1][rowAndCol.col]);
	}
	if (rowAndCol.row < 16) {
		rowAndCols.push(this.cells[rowAndCol.row + 1][rowAndCol.col]);
	}
	if (rowAndCol.col > 0) {
		rowAndCols.push(this.cells[rowAndCol.row][rowAndCol.col - 1]);
	}
	if (rowAndCol.col < 16) {
		rowAndCols.push(this.cells[rowAndCol.row][rowAndCol.col + 1]);
	}

	return rowAndCols;
};

Board.prototype.pointIsOpenGate = function(notationPoint) {
	var point = notationPoint.rowAndColumn;
	point = this.cells[point.row][point.col];

	return point.isOpenGate();
};

Board.prototype.moveTile = function(player, notationPointStart, notationPointEnd) {
	var startRowCol = notationPointStart.rowAndColumn;
	var endRowCol = notationPointEnd.rowAndColumn;

	if (startRowCol.row < 0 || startRowCol.row > 16 || endRowCol.row < 0 || endRowCol.row > 16) {
		debug("That point does not exist. So it's not gonna happen.");
		return false;
	}

	var boardPointStart = this.cells[startRowCol.row][startRowCol.col];
	var boardPointEnd = this.cells[endRowCol.row][endRowCol.col];

	if (!this.canMoveTileToPoint(player, boardPointStart, boardPointEnd)) {
		debug("Bad move bears");
		return false;
	}

	var tile = boardPointStart.removeTile();

	if (!tile) {
		debug("Error: No tile to move!");
	}

	// If tile is capturing a White Lotus, there's a winner
	if (boardPointEnd.hasTile() && boardPointEnd.tile.code === 'L' && tile.ownerName !== boardPointEnd.tile.ownerName) {
		this.winners.push(tile.ownerName);
	}

	boardPointEnd.putTile(tile);

	this.setPointFlags();
};

Board.prototype.setPointFlags = function() {
	// First, unblock, unprotect
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			var bp = this.cells[row][col];
			if (bp.hasTile()) {
				bp.tile.blocked = false;
				bp.tile.protected = false;
			}
		}
	}
	// Find Chrysanthemum tiles, then check surrounding Bison tiles to set them as blocked
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			var bp = this.cells[row][col];
			this.blockTilesAdjacentToPointIfNeeded(bp);
			this.protectTilesAdjacentToPointIfNeeded(bp);
		}
	}
};

Board.prototype.blockTilesAdjacentToPointIfNeeded = function(boardPoint) {
	if (!boardPoint.hasTile()) {
		return;
	}
	if (boardPoint.tile.code !== 'C') {
		return;
	}

	// Chrysanthemum blocks opponent's Sky Bison

	var chrysanthemumOwner = boardPoint.tile.ownerName;

	var rowCols = this.getAdjacentRowAndCols(boardPoint);

	for (var i = 0; i < rowCols.length; i++) {
		var bp = this.cells[rowCols[i].row][rowCols[i].col];
		if (bp.hasTile()) {
			if (bp.tile.code === 'S' && bp.tile.ownerName !== chrysanthemumOwner) {
				bp.tile.blocked = true;
			}
		}
	}
};

Board.prototype.protectTilesAdjacentToPointIfNeeded = function(boardPoint) {
	if (!boardPoint.hasTile()) {
		return;
	}
	if (boardPoint.tile.code !== 'B') {
		return;
	}

	// Badgermole protects same player's Flower Tiles

	var badgermoleOwner = boardPoint.tile.ownerName;

	var rowCols = this.getAdjacentRowAndCols(boardPoint);

	for (var i = 0; i < rowCols.length; i++) {
		var bp = this.cells[rowCols[i].row][rowCols[i].col];
		if (bp.hasTile()) {
			if (bp.tile.isFlowerTile() && bp.tile.ownerName === badgermoleOwner) {
				bp.tile.protected = true;
			}
		}
	}
};

Board.prototype.canCapture = function(boardPointStart, boardPointEnd) {
	var tile = boardPointStart.tile;
	var otherTile = boardPointEnd.tile;

	if (tile.ownerName === otherTile.ownerName) {
		return false;	// Cannot capture own tile
	}

	if (otherTile.protected) {
		return false;	// Cannot capture protected tiles
	}

	// Is tile even a tile that can capture at all?
	if (!tile.hasCaptureAbility()) {
		debug(tile.getName() + " cannot capture anything.");
		return false;
	}

	// TODO Check if tile is protected from capture...
	//

	var playerLotusPlayed = this.hlPlayed;
	var otherLotusPlayed = this.glPlayed;
	if (tile.ownerName === GUEST) {
		playerLotusPlayed = this.glPlayed;
		otherLotusPlayed = this.hlPlayed;
	}

	// Okay, so the tile is a tile that is able to capture things... 
	// Can the player capture Flower Tiles? (if they've played Lotus)
	if (otherTile.isFlowerTile()) {
		return playerLotusPlayed;
	} else {
		return playerLotusPlayed && otherLotusPlayed;
	}
};

Board.prototype.canMoveTileToPoint = function(player, boardPointStart, boardPointEnd) {
	// start point must have a tile
	if (!boardPointStart.hasTile()) {
		return false;
	}

	// Tile must belong to player
	if (boardPointStart.tile.ownerName !== player) {
		return false;
	}

	// Cannot move blocked tile (Bison blocked by Chrysanthemum)
	if (boardPointStart.tile.blocked) {
		return false;
	}
	
	var canCapture = false;
	if (boardPointEnd.hasTile()) {
		canCapture = this.canCapture(boardPointStart, boardPointEnd);
	}

	// If endpoint is a Gate with no tile, that's wrong.
	if (!boardPointEnd.hasTile() && boardPointEnd.isType(GATE)) {
		return false;
	}

	// If endpoint has a tile there that can't be captured, that is wrong.
	if (boardPointEnd.hasTile() && !canCapture) {
		return false;
	}

	// Sky Bison special: Cannot move into other Bison "zone"
	if (boardPointStart.tile.code === 'S') {
		// If overlaps with another Bison zone, return false
		// Get all other Sky Bison tiles, check their zones
		var bisons = [];
		for (var row = 0; row < this.cells.length; row++) {
			for (var col = 0; col < this.cells[row].length; col++) {
				var bp = this.cells[row][col];
				if (bp.hasTile() && bp.tile.code === 'S' && bp.tile.id !== boardPointStart.tile.id && !bp.isType(GATE) && !bp.tile.blocked) {
					bisons.push(bp);
				}
			}
		}

		for (var i = 0; i < bisons.length; i++) {
			if (Math.abs(bisons[i].row - boardPointEnd.row) + Math.abs(bisons[i].col - boardPointEnd.col) <= 6) {
				return false;
			}
		}
	}

	// Dragon special: Can move within Fire Lily range
	if (boardPointStart.tile.code === 'D') {
		// Must have Fire Lily
		var fireLilyPoint = this.getFireLilyPoint(boardPointStart.tile.ownerName);

		if (!fireLilyPoint) {
			debug("No Fire Lily");
			return false;
		}

		if (Math.abs(fireLilyPoint.row - boardPointEnd.row) + Math.abs(fireLilyPoint.col - boardPointEnd.col) <= 5) {
			// Point inside Fire Lily range
			return true;
		} else {
			return false;
		}
	}

	// Wheel
	if (boardPointStart.tile.code === 'W') {
		var bp = boardPointStart;
		var bp2 = boardPointEnd;
		if (bp.row - bp.col === bp2.row - bp2.col) {
			// Up or Down
			// Verify no tiles in the way
			var rowStart = bp.row + 1;
			var rowEnd = bp2.row;
			if (bp.row > bp2.row) {
				rowStart = bp2.row + 1;
				rowEnd = bp.row;
			}

			// Scan for tile in the way from start to end point
			for (var row = rowStart; row < rowEnd; row++) {
				var col = row - (bp.row - bp.col);
				if (this.cells[row][col].hasTile()) {
					return false;
				}
			}

			return true;
		} else if (bp.row + bp.col === bp2.row + bp2.col) {
			// Left or Right
			// Verify no tiles in the way
			var rowStart = bp.row + 1;
			var rowEnd = bp2.row;
			if (bp.row > bp2.row) {
				rowStart = bp2.row + 1;
				rowEnd = bp.row;
			}

			if (bp2.row === 5 && bp2.col === 5) {
				debug("hi");
			}

			// Scan for tile in the way from start to end point
			for (var row = rowStart; row < rowEnd; row++) {
				var col = bp.row + bp.col - row;
				if (this.cells[row][col].hasTile()) {
					return false;
				}
			}

			return true;
		} else {
			return false;
		}
	}

	// Special for Badgermole
	if (boardPointStart.tile.code === 'B') {
		// Can move directly next to Flower Tile if in line
		// Is there a Flower Tile next to this end point?
		if (this.inLineWithAdjacentFlowerTile(boardPointStart, boardPointEnd)) {
			return true;
		}
	}

	// Normal tile movement:
	// If endpoint is too far away, that is wrong.
	var numMoves = boardPointStart.tile.getMoveDistance();
	if (Math.abs(boardPointStart.row - boardPointEnd.row) + Math.abs(boardPointStart.col - boardPointEnd.col) > numMoves) {
		// end point is too far away, can't move that far
		return false;
	} else {
		// Move may be possible. But there may be tiles in the way...
		if (!this.verifyAbleToReach(boardPointStart, boardPointEnd, numMoves)) {
			return false;
		}
	}

	// I guess we made it through
	return true;
};

Board.prototype.inLineWithAdjacentFlowerTile = function(bp, bp2) {
	var flowerPoint;

	if (bp.row === bp2.row) {
		// On same row
		if (bp.col > bp2.col && bp2.col > 0) {
			flowerPoint = this.cells[bp2.row][bp2.col - 1];
		} else if (bp.col < bp2.col && bp2.col < 16) {
			flowerPoint = this.cells[bp2.row][bp2.col + 1];
		}
	} else if (bp.col === bp2.col) {
		// On same col
		if (bp.row > bp2.row && bp2.row > 0) {
			flowerPoint = this.cells[bp2.row - 1][bp2.col];
		} else if (bp.row < bp2.row && bp2.row < 16) {
			flowerPoint = this.cells[bp2.row + 1][bp2.col];
		}
	}

	if (flowerPoint && flowerPoint.hasTile() && flowerPoint.tile.ownerName === bp.tile.ownerName) {
		return flowerPoint.tile.isFlowerTile();
	}
	return false;
};

Board.prototype.verifyAbleToReach = function(boardPointStart, boardPointEnd, numMoves) {
  // Recursion!
  return this.pathFound(boardPointStart, boardPointEnd, numMoves);
};

Board.prototype.pathFound = function(boardPointStart, boardPointEnd, numMoves) {
  if (!boardPointStart || !boardPointEnd) {
    return false; // start or end point not given
  }

  if (boardPointStart.isType(NON_PLAYABLE) || boardPointEnd.isType(NON_PLAYABLE)) {
  	return false;	// Paths must be through playable points
  }

  if (boardPointStart.row === boardPointEnd.row && boardPointStart.col === boardPointEnd.col) {
    return true; // Yay! start point equals end point
  }
  if (numMoves <= 0) {
    return false; // No more moves left
  }
  
  // Idea: Get min num moves necessary!
  var minMoves = Math.abs(boardPointStart.row - boardPointEnd.row) + Math.abs(boardPointStart.col - boardPointEnd.col);
  
  if (minMoves === 1) {
    return true; // Yay! Only 1 space away (and remember, numMoves is more than 0)
  }

  // Check moving UP
  var nextRow = boardPointStart.row - 1;
  if (nextRow >= 0) {
    var nextPoint = this.cells[nextRow][boardPointStart.col];
    if (!nextPoint.hasTile() && this.pathFound(nextPoint, boardPointEnd, numMoves - 1)) {
      return true; // Yay!
    }
  }

  // Check moving DOWN
  nextRow = boardPointStart.row + 1;
  if (nextRow < 17) {
    var nextPoint = this.cells[nextRow][boardPointStart.col];
    if (!nextPoint.hasTile() && this.pathFound(nextPoint, boardPointEnd, numMoves - 1)) {
      return true; // Yay!
    }
  }

  // Check moving LEFT
  var nextCol = boardPointStart.col - 1;
  if (nextCol >= 0) {
    var nextPoint = this.cells[boardPointStart.row][nextCol];
    if (!nextPoint.hasTile() && this.pathFound(nextPoint, boardPointEnd, numMoves - 1)) {
      return true; // Yay!
    }
  }

  // Check moving RIGHT
  nextCol = boardPointStart.col + 1;
  if (nextCol < 17) {
    var nextPoint = this.cells[boardPointStart.row][nextCol];
    if (!nextPoint.hasTile() && this.pathFound(nextPoint, boardPointEnd, numMoves - 1)) {
      return true; // Yay!
    }
  }
};

Board.prototype.setPossibleMovePoints = function(boardPointStart) {
	if (!boardPointStart.hasTile()) {
		return;
	}
	// Apply "possible move point" type to applicable boardPoints
	var player = boardPointStart.tile.ownerName;
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			if (this.canMoveTileToPoint(player, boardPointStart, this.cells[row][col])) {
				this.cells[row][col].addType(POSSIBLE_MOVE);
			}
		}
	}
};

Board.prototype.removePossibleMovePoints = function() {
	this.cells.forEach(function(row) {
		row.forEach(function(boardPoint) {
			boardPoint.removeType(POSSIBLE_MOVE);
		});
	});
};

Board.prototype.getFireLilyPoint = function(player) {
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			var bp = this.cells[row][col];
			if (bp.hasTile()) {
				if (bp.tile.ownerName === player && bp.tile.code === 'F') {
					return bp;
				}
			}
		}
	}
};

Board.prototype.setDeployPointsPossibleMoves = function(player, tileCode) {
	// Dragon is special
	if (tileCode === 'D') {
		// Must have Fire Lily
		var fireLilyPoint = this.getFireLilyPoint(player);

		if (!fireLilyPoint) {
			debug("No Fire Lily");
			return;
		}

		for (var row = 0; row < this.cells.length; row++) {
			for (var col = 0; col < this.cells[row].length; col++) {
				var bp = this.cells[row][col];
				if (!bp.hasTile()) {
					if (Math.abs(fireLilyPoint.row - bp.row) + Math.abs(fireLilyPoint.col - bp.col) <= 5) {
						// Point within Fire Lily range
						bp.addType(POSSIBLE_MOVE);
					}
				}
			}
		}

		return;
	}

	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			var bp = this.cells[row][col];
			if (!bp.hasTile()) {
				if (tileCode === 'S') {
					if (bp.isType(GATE)) {
						bp.addType(POSSIBLE_MOVE);
					}
				} else if (!bp.isType(GATE)) {
					bp.addType(POSSIBLE_MOVE);
				}
			}
		}
	}
};

Board.prototype.setGuestGateOpen = function() {
	var row = 16;
	var col = 8;
	if (this.cells[row][col].isOpenGate()) {
		this.cells[row][col].addType(POSSIBLE_MOVE);
	}
};

Board.prototype.revealPossiblePlacementPoints = function(tile) {
	var self = this;
	this.cells.forEach(function(row) {
		row.forEach(function(boardPoint) {
			var valid = false;

			if (tile.accentType === ROCK && self.canPlaceRock(boardPoint)) {
				valid = true;
			} else if (tile.accentType === WHEEL && self.canPlaceWheel(boardPoint)) {
				valid = true;
			} else if (tile.accentType === KNOTWEED && self.canPlaceKnotweed(boardPoint)) {
				valid = true;
			} else if (tile.accentType === BOAT && self.canPlaceBoat(boardPoint, tile)) {
				valid = true;
			}

			if (valid) {
				boardPoint.addType(POSSIBLE_MOVE);
			}
		});
	});
};

Board.prototype.revealBoatBonusPoints = function(boardPoint) {
	if (!boardPoint.hasTile()) {
		return;
	}
	// Apply "possible move point" type to applicable boardPoints
	var player = boardPoint.tile.ownerName;
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			var boardPointEnd = this.cells[row][col];
			if (Math.abs(boardPoint.row - boardPointEnd.row) + Math.abs(boardPoint.col - boardPointEnd.col) === 1) {
				if (this.canMoveTileToPoint(player, boardPoint, boardPointEnd)) {
					boardPointEnd.addType(POSSIBLE_MOVE);
				}
			}
		}
	}
};

// Board.prototype.getCopy = function() {
// 	var copyBoard = new Board();

// 	/*
// 	this.cells = this.brandNew();

// 	this.rockRowAndCols = [];	// call refreshRockRowAndCo...
// 	this.playedWhiteLotusTiles = [];
// 	this.winners = [];	// call analyzeHarmon...
// 	*/

// 	// cells
// 	for (var row = 0; row < this.cells.length; row++) {
// 		for (var col = 0; col < this.cells[row].length; col++) {
// 			copyBoard.cells[row][col] = this.cells[row][col].getCopy();
// 		}
// 	}

// 	// playedWhiteLotusTiles
// 	for (var i = 0; i < this.playedWhiteLotusTiles.length; i++) {
// 		copyBoard.playedWhiteLotusTiles.push(this.playedWhiteLotusTiles[i].getCopy());
// 	}
	
// 	return copyBoard;
// };






