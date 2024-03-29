<?php

namespace App\Repository;

use App\Entity\Event;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry as RegistryInterface;

/**
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Event::class);
    }

//    /**
//     * @return Event[] Returns an array of Event objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Event
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function orderedByDate($amount)
    {
        return $this->createQueryBuilder('e')
            ->orderBy('e.datetime', 'DESC')
            ->orderBy('e.position', 'DESC')
            ->setMaxResults($amount)
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @return Event[] Returns an array of PosterEvent objects
     */
    public function findByDateFieldPosition($position, $amount)
    {
        return $this->createQueryBuilder('e')
            ->orderBy('e.date', 'DESC')
            ->orderBy('e.position', 'DESC')
            ->setMaxResults($amount)
            ->setFirstResult($position)
            ->getQuery()
            ->getResult()
            ;
    }
}
