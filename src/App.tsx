import { useState, useEffect } from 'react';
import { deckGroups, getCardsForGroup, flashcards } from './data';
import type { Card } from './types';

function App() {
  const [activeGroupId, setActiveGroupId] = useState(deckGroups[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learnedCards, setLearnedCards] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('learned_cards');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        return new Set();
      }
    }
    return new Set();
  });
  const [showLearnedOnly, setShowLearnedOnly] = useState(false);

  const activeGroup = deckGroups.find(g => g.id === activeGroupId) || deckGroups[0];
  const allCards = getCardsForGroup(activeGroupId);
  // Study mode hides mastered cards so they don't show up again; review mode shows only mastered cards.
  const studyCards = showLearnedOnly
    ? allCards.filter(c => learnedCards.has(c.id))
    : allCards.filter(c => !learnedCards.has(c.id));
  const currentCard: Card | undefined = studyCards[currentIndex];

  useEffect(() => {
    localStorage.setItem('learned_cards', JSON.stringify(Array.from(learnedCards)));
  }, [learnedCards]);

  // Keep currentIndex valid whenever the active card list changes size
  // (e.g. a card gets marked learned and disappears from the study queue).
  useEffect(() => {
    setCurrentIndex(prev => {
      if (studyCards.length === 0) return 0;
      return Math.min(prev, studyCards.length - 1);
    });
  }, [studyCards.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.code === 'KeyL') {
        e.preventDefault();
        if (currentCard) {
          toggleLearned(currentCard.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, activeGroupId, currentCard, studyCards.length, showLearnedOnly]);

  const handleNext = () => {
    if (currentIndex < studyCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const toggleLearned = (cardId: number) => {
    setLearnedCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  // Get learned count for a specific deck group
  const getDeckProgress = (groupId: string) => {
    const groupCards = getCardsForGroup(groupId);
    if (groupCards.length === 0) return 0;
    const learnedCount = groupCards.filter(c => learnedCards.has(c.id)).length;
    return Math.round((learnedCount / groupCards.length) * 100);
  };

  const currentDeckLearnedCount = allCards.filter(c => learnedCards.has(c.id)).length;

  const handleModeToggle = () => {
    setShowLearnedOnly(prev => !prev);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-section">
          <h1>日本語 Flashcards</h1>
          <p>Learn core Japanese vocabulary with modern, intuitive cards</p>
        </div>
        <div className="stats-badge">
          <span>{learnedCards.size} / {flashcards.length}</span> Words Mastered
          <div className="mode-toggle">
            <span className="mode-toggle-label">Review Learned</span>
            <label className="switch" title="Toggle to review words you've already learned">
              <input
                type="checkbox"
                checked={showLearnedOnly}
                onChange={handleModeToggle}
              />
              <span className="switch-slider"></span>
            </label>
          </div>
        </div>
      </header>

      <main className="main-grid">
        {/* Sidebar for Deck Selector */}
        <section className="sidebar">
          <h2 className="section-title">Vocabulary Decks</h2>
          <div className="deck-list">
            {deckGroups.map(group => {
              const isActive = group.id === activeGroupId;
              const progress = getDeckProgress(group.id);
              return (
                <button
                  key={group.id}
                  className={`deck-card ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveGroupId(group.id);
                    setCurrentIndex(0);
                    setIsFlipped(false);
                  }}
                >
                  <span className={`deck-level ${group.level.replace(' ', '-').toLowerCase().includes('n2') ? 'n2' : 'n3'}`}>
                    {group.level}
                  </span>
                  <h3>{group.title}</h3>
                  <div className="deck-info">
                    <span>{group.cardCount} words</span>
                    <span>{progress}% learned</span>
                  </div>
                  <div className="progress-bar-bg" style={{ height: '4px', marginTop: '0.5rem' }}>
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Flashcard Practice Area */}
        {currentCard ? (
          <section className="flashcard-area">
            {/* The Flashcard itself */}
            <div
              className={`card-container ${isFlipped ? 'flipped' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="flashcard">
                {/* Front Side */}
                <div className="card-face card-front">
                  <div className="card-header">
                    <span>{activeGroup.level}</span>
                    <span>Card #{currentCard.id}</span>
                  </div>
                  <div className="card-body">
                    <span className="card-front-text">{currentCard.front}</span>
                  </div>
                  <div className="card-footer-tip">
                    Click card or press <span className="shortcut-tag">Space</span> to flip
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-face card-back">
                  <div className="card-header">
                    <span>{activeGroup.level}</span>
                    <span>Card #{currentCard.id}</span>
                  </div>
                  <div className="card-body">
                    <span className="card-back-reading">{currentCard.back.split('—')[0]?.trim()}</span>
                    <span className="card-back-meaning">{currentCard.back.split('—')[1]?.trim()}</span>
                  </div>
                  <div className="card-footer-tip">
                    Press <span className="shortcut-tag">L</span> to {learnedCards.has(currentCard.id) ? 'un-mark as learned' : 'mark as learned'}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation and Actions */}
            <div className="controls">
              <button
                className="btn"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                ← Prev
              </button>

              <button
                className="btn btn-primary"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                Flip Card
              </button>

              <button
                className="btn"
                onClick={handleNext}
                disabled={currentIndex === studyCards.length - 1}
              >
                Next →
              </button>

              <button
                className={`btn ${learnedCards.has(currentCard.id) ? 'btn-learned-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLearned(currentCard.id);
                }}
                style={{
                  backgroundColor: learnedCards.has(currentCard.id) ? 'var(--success-light)' : '',
                  color: learnedCards.has(currentCard.id) ? 'var(--success)' : '',
                  borderColor: learnedCards.has(currentCard.id) ? 'var(--success)' : ''
                }}
              >
                {learnedCards.has(currentCard.id) ? '✓ Learned' : 'Mark Learned'}
              </button>
            </div>

            {/* Deck progress details */}
            <div className="progress-section">
              <div className="progress-info">
                <span>{showLearnedOnly ? 'Reviewing Learned' : 'Progress'}</span>
                <span>
                  {currentIndex + 1} / {studyCards.length} cards
                  {!showLearnedOnly && ` (${currentDeckLearnedCount} mastered)`}
                </span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${((currentIndex + 1) / studyCards.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Quick Word List Grid */}
            <div className="word-list-section">
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {showLearnedOnly ? 'Mastered Words' : 'Words To Learn'}
              </h4>
              <div className="word-list-grid">
                {studyCards.map((card, idx) => {
                  const isLearned = learnedCards.has(card.id);
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={card.id}
                      className={`word-item ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setIsFlipped(false);
                      }}
                      style={{
                        backgroundColor: isActive
                          ? 'var(--primary)'
                          : isLearned
                          ? 'var(--success-light)'
                          : '',
                        color: isActive
                          ? 'white'
                          : isLearned
                          ? 'var(--success)'
                          : 'var(--text-main)',
                        borderColor: isActive
                          ? 'var(--primary)'
                          : isLearned
                          ? 'var(--success)'
                          : ''
                      }}
                      title={`${card.front} (${isLearned ? 'Learned' : 'Not learned'})`}
                    >
                      {card.id}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="shortcuts-footer">
              <div><span className="shortcut-tag">←</span> / <span className="shortcut-tag">→</span> Navigation</div>
              <div><span className="shortcut-tag">Space</span> Flip Card</div>
              <div><span className="shortcut-tag">L</span> Mark Learned</div>
            </div>
          </section>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">{showLearnedOnly ? '📭' : '🎉'}</div>
            <h3>{showLearnedOnly ? 'No mastered words yet' : 'All caught up!'}</h3>
            <p>
              {showLearnedOnly
                ? "Mark some words as learned and they'll show up here for review."
                : 'You\'ve learned every word in this deck. Flip the switch above to review them, or pick another deck.'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
