<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210625004043 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_vote (id INT AUTO_INCREMENT NOT NULL, poster_id INT DEFAULT NULL, event_id INT DEFAULT NULL, user_id VARCHAR(255) NOT NULL, updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_2091C9AD5BB66C05 (poster_id), INDEX IDX_2091C9AD71F7E88B (event_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_vote ADD CONSTRAINT FK_2091C9AD5BB66C05 FOREIGN KEY (poster_id) REFERENCES poster (id)');
        $this->addSql('ALTER TABLE user_vote ADD CONSTRAINT FK_2091C9AD71F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('DROP TABLE migration_versions');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE migration_versions (version VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_unicode_ci`, PRIMARY KEY(version)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE user_vote');
    }
}
